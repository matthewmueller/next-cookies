import cookies from "next-cookies";

const Cookies = ({ cookies }) => (
  <div>
    <h1>Cookies:</h1>
    <ul id="cookies">
      {Object.keys(cookies).map(name => (
        <li key={name}>
          <b id={`cookie-${name}`}>{name}</b>: {cookies[name]}
        </li>
      ))}
    </ul>
  </div>
);

Cookies.getInitialProps = ctx => ({
  cookies: cookies(ctx)
});

export default Cookies;
