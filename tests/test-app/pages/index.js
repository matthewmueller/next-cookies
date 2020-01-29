// not sure what eslint is smoking here
// eslint-disable-next-line no-unused-vars
import Link from "next/link";

const Home = () => (
  <div>
    <h1>Pages:</h1>
    <ul>
      <li>
        <Link href="/cookies">
          <a id="cookies-link">Cookies</a>
        </Link>
      </li>
      <li>
        <Link href="/parsed-unparsed">
          <a id="parsed-unparsed-link">Parsed/Unparsed</a>
        </Link>
      </li>
    </ul>
    <h1>API:</h1>
    <ul>
      <li>
        <Link href="/api/set-cookie">
          <a>/api/set-cookie</a>
        </Link>
      </li>
      <li>
        <Link href="/api/set-cookie-json">
          <a>/api/set-cookie-json</a>
        </Link>
      </li>
      <li>
        <Link href="/api/delete-cookie">
          <a>/api/delete-cookie</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Home;
