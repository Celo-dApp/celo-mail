const Web3 = require("web3");
const decrypt = require("./decrypt");
const email = require("./email");

// https://docs.celo.org/v/master/developer-guide/forno#forno-networks
const socketProvider = new Web3.providers.WebsocketProvider(process.env.WEB3_SOCKET);
const web3Socket = new Web3(socketProvider);

function subscribeToCelo() {
  console.log("\x1b[33m%s\x1b[0m", "listener.js", "- Listening to celo transactions");
  const pendingTransactions = web3Socket.eth
    .subscribe("logs", { address: process.env.CUSD_ADDRESS }) // listen to cUSD tx
    .on("data", (log) => {
      try {
        // parse log
        const { transactionHash, data } = log;
        // parse encrypted email from data
        const encryptedEmailHex = Buffer.from(data.slice(130).replace(/^0+|0+$/g, ""), "hex").toString("utf8");
        // decrypt email
        const decryptedEmail = decrypt(encryptedEmailHex);
        // send email
        if (decryptedEmail) {
          email(decryptedEmail, transactionHash);
        }
      } catch (err) {}
    })
    .on("error", async (err) => {
      // restart when shit goes wrong
      pendingTransactions.unsubscribe();
      setTimeout(() => {
        console.log("trying again: ", error);
        subscribeToCelo();
      }, 5000);
    });
}

module.exports = subscribeToCelo;
