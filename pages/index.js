import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(".");
  const date = new Date();

  const getQr = async (event) => {
    // prevent from refreshing
    event.preventDefault();
    const name = event.target[0].value;
    const amount = event.target[1].value;
    const address = event.target[2].value;
    const email = event.target[3].value;
    // /api/qr?address=0x4219f37376A1656303b985D78761C29EEc72caDa&amount=0.001&displayName=asd&email=mail@mail.com
    const res = await fetch(`/api/qr?name=${name}&amount=${amount}&address=${address}&email=${email}`);
    const data = await res.json();
    data.error ? setError(data.error) : setError("");
    console.log(data);
    setSvg(data.svg);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Celo Mail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <Image src="/logo.png" alt="logo" width="50" height="50" />
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>Celo Mail</h1>

        <p className={styles.description}>Secure Payment Notifications</p>

        <div className={styles.qrContainer}>
          <img width="100%" className={styles.qr} src={svg}></img>
        </div>

        <form onSubmit={getQr}>
          <div>
            <span className={styles.inputName}>Name: </span>
            <input className={styles.inputValue} placeholder="Coffee"></input>
          </div>
          <div>
            <span className={styles.inputName}>cUSD: </span>
            <input className={styles.inputValue} placeholder="5"></input>
          </div>
          <div>
            <span className={styles.inputName}>Address: </span>
            <input className={styles.inputValue} placeholder="0x4219f37376A..."></input>
          </div>
          <div>
            <span className={styles.inputName}>Email: </span>
            <input className={styles.inputValue} placeholder="me@email.com"></input>
          </div>

          <button className={styles.qrButton}>Generate</button>

          <div className={styles.error}>{error}</div>
        </form>
      </main>

      <footer className={styles.footer}>
        <div>Celo Mail {date.getFullYear()}</div>
      </footer>
    </div>
  );
}
