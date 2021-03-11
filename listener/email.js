const nodemailer = require("nodemailer");
require('dotenv').config()

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASS,
  },
});

// email("username@email.com", "mySubjectLine", "myMessageHere");
function email(to, transactionHash) {
  const subject = "Celo Payment Recieved"
  const html = `
    <div>hello</div>
    <br>
    <div>You recived a Celo payment:</div>
    <a href="https://alfajores-blockscout.celo-testnet.org/tx/${transactionHash}/token_transfers">${transactionHash}</a>
    <br><br>
    <div>Celo Mail</div>
  `
  transporter.sendMail({
    from: process.env.EMAIL_USERNAME,
    to,
    subject,
    html,
  }, (error, info) => {
    console.log({error, info})
  });
}

module.exports = email;
