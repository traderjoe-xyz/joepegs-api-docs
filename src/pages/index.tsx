import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const APPLICATION_FORM_URL = "https://forms.gle/6tMwevFCicd9nYoCA"
  return (
    <Layout
      title="Joepegs API"
      description="NFT API, Free for the Community."
    >
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Joepegs API</h1>
        <p className="hero__subtitle">
          API for NFT Collection, Item, and Owner data on the Joepegs NFT
          marketplace.
        </p>
        <p>Apply for API Key for access. Free for community builders. </p>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" href={APPLICATION_FORM_URL}>
            Apply for API Key
          </Link>
        </div>
      </div>
    </header>
    <main style={{maxWidth: '800px', margin: '0 auto',  padding: '3rem 1rem' }}>
      <h1>FAQ</h1>
      <h2>What is Joepegs?</h2>
      <p><Link href="https://joepegs.com">Joepegs</Link> is an NFT marketplace on the Avalanche blockchain. We help users discover great NFTs through our launchpad and our decentralized marketplace.</p>

      <h2>What can I build with it?</h2>
      <p>The Joepegs Public API is free for community builders. <Link href={APPLICATION_FORM_URL}>Apply here</Link> and tell us what you're building! We'd love to help.</p>
      
      <h2>What chains are supported?</h2>
      <p>Avalanche C-Chain, and its testnet Fuji.</p>

      <h2>Do you support a specific metadata?</h2>
      <p>Read <Link to="/docs/metadata">here</Link> for more.</p>

      <h2>How can I get higher rate limits?</h2>
      <p><Link href="mailto:public-api@joepegs.com">Contact us</Link> to discuss.</p>

      <h2>How do I get access to Partner Only endpoints?</h2>
      <p><Link href="mailto:public-api@joepegs.com">Contact us</Link> and tell us what you're building!</p>

    </main>
    </Layout>
  );
}
