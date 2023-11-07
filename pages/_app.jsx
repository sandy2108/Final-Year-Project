import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import { domainName } from "../const/yourDetails";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      clientId="8a5d6332a62a37374a99374f632d8d2d"
      authConfig={{
        domain: domainName,
        authUrl: "/api/auth",
      }}
      
    >
      <Head>
        <title>NFTSEEKER</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="NFT Gated Website"
        />
      </Head>
      <Component {...pageProps} />
    
    </ThirdwebProvider>
  );
}

export default MyApp;
