import "../styles/globals.css";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Project Alpha</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
