// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/qr?address=0x4219f37376A1656303b985D78761C29EEc72caDa&amount=0.001&displayName=asd&email=mail@mail.com
const QRCode = require("qrcode");
const svgToDataURL = require("svg-to-dataurl");
const Joi = require("joi");
const encrypt = require("../../listener/encrypt");

const schema = Joi.object({
  name: Joi.string().allow(''),
  amount: Joi.number().min(0).required(),
  address: Joi.string().length(42).required(),
  email: Joi.string().email().allow(''),
});

export default async (req, res) => {
  try {
    // validate query
    await schema.validateAsync(req.query);
    const { name, amount, address, email } = req.query;
    // encrypt email. this will be the comment sent
    const comment = encrypt(email);
    // generate uri
    const uri = `celo://wallet/pay?address=${address}&amount=${amount}&displayName=${name}&comment=${comment}`;
    // generate qr
    const qr = await QRCode.toString(uri, { type: "svg" });
    // qr to base64
    const svg = svgToDataURL(qr);
    res.status(200).json({ uri, svg });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: err.details[0].message });
  }
};
