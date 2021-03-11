const aesjs = require("aes-js");

// encrypt("hello") == "8063aa186d"
function encrypt(text) {
  const textBytes = aesjs.utils.utf8.toBytes(text);
  const aesCtr = new aesjs.ModeOfOperation.ctr(JSON.parse(process.env.AES_KEY));
  const encryptedBytes = aesCtr.encrypt(textBytes);
  const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
  return encryptedHex;
}

module.exports = encrypt;
