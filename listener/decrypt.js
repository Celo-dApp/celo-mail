const aesjs = require("aes-js");

// decrypt("8063aa186d") == "hello"
function decrypt(encryptedHex) {
  const encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
  const aesCtr = new aesjs.ModeOfOperation.ctr(JSON.parse(process.env.AES_KEY));
  const decryptedBytes = aesCtr.decrypt(encryptedBytes);
  const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
  return decryptedText;
}

module.exports = decrypt;
