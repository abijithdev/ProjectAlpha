import Head from "next/head";
import "../styles/globals.css";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Next.js</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
