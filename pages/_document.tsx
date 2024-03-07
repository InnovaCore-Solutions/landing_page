import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <Script strategy="beforeInteractive" src="/sripts/darkModeScript.js" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
