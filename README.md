# Celo Mail

## Secure Payment Notifications

![](https://user-images.githubusercontent.com/19412160/110847421-e6848e80-827a-11eb-9946-0636ebedc4be.png)

![](https://user-images.githubusercontent.com/19412160/110860210-7da51280-828a-11eb-8d55-6bb2af5bd2f8.png)

Celo Mail is a simple and secure way to receive email notifications whenever you receive a payment. Emails are encrypted with Advanced Encryption Standard (AES), an encryption chosen by the U.S. government to protect classified information. The same technology used to encrypt classified information is also used to purchase a coffee on Celo.

## Video Demo

[<img src="https://user-images.githubusercontent.com/19412160/110902734-56733300-82d4-11eb-95f1-52456f529647.png">](https://www.youtube.com/watch?v=Jm9qSrAxYms)


## Development

Install

```bash
yarn
```

Create `.env` in root with these variables

```
CUSD_ADDRESS=0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1
WEB3_SOCKET=wss://alfajores-forno.celo-testnet.org/ws
AES_KEY=[1, 2, 3]
EMAIL_HOST=smtp.mail.com
EMAIL_PORT=587
EMAIL_USERNAME=sending@email.com
EMAIL_PASS=super-secure-password
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/](http://localhost:3000/api/qr). This endpoint can be edited in `pages/api/qr.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

