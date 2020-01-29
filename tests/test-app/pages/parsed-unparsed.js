import cookies from "next-cookies";

const Cookies = ({ parsed, unparsed }) => (
  <div>
    <h1>test_cookie, parsed and unparsed:</h1>
    <ul id="cookies">
      <li id="parsed">
        <b>parsed</b>: ({typeof parsed}) {JSON.stringify(parsed, null, 2)}
      </li>
      <li id="unparsed">
        <b>unparsed</b>: ({typeof unparsed}) {unparsed}
      </li>
    </ul>
  </div>
);

Cookies.getInitialProps = ctx => ({
  parsed: cookies(ctx)["test_cookie"],
  unparsed: cookies(ctx, { doNotParse: true })["test_cookie"]
});

export default Cookies;
