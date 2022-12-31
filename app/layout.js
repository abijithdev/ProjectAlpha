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
// There is also the need for a password reset flow, forgot password flow, password strength enforcement, user invalidation, role management, scope management, etc.Also, potentially, you want to have your services talking to each other, so you have to manage that access as well.On the front end, you need to protect against XSS, CSRF attacks etc.You will also need to protect your user data differently and provide a 'forget me' functionality if you are in a GDPR enforcing market.