This listens to transactions and emails when complete.

`index.js`

- entry point

`listener.js`

- subscribes to celo transactions

`encrypt.js` encrypts message. Used in `pages/api/qr.js`

- encrypt("hello") == "8063aa186d"

`decrypt.js` decrypts message from transaction

- decrypt("8063aa186d") == "hello

`email.js` emails user

- email("username@email.com", "mySubjectLine", "myMessageHere")
