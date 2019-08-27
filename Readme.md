# Next Cookies

Tiny little function for getting cookies on both client & server with next.js.

This allows you to set the cookie client-side, but perform server-side rendering of your components.

## Installation

```
yarn add next-cookies
```

or

```
npm install --save next-cookies
```


## Usage

### Read all cookies:

```js
const allCookies = cookies(ctx);
```

`allCookies` will be an object with keys for each cookie.

The `ctx` object is passed to your [`getInitialProps`](https://nextjs.org/docs#fetching-data-and-component-lifecycle) function by next.js.

### Read a single cookie:

```js
const { myCookie } = cookies(ctx);
```
or 
```js
const myCookie = cookies(ctx).myCookie;
```

The `ctx` object is passed to your [`getInitialProps`](https://nextjs.org/docs#fetching-data-and-component-lifecycle) function by next.js.

### Set a cookie:

This library does not support setting cookies. However, here's how you do it in client-side code:

```js
document.cookie = `foo=bar; path=/`;
```

This sets a cookie named `foo` to the value `bar. The `path` part is optional but usually what you wanted. You can also add an expiration date to make it go away at a specific time instead of wheever the browser is closed.

### Delete a cookie:

This library does not support deleting cookies. However, here's how you do it in client-side code:

```js
document.cookie = `foo=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
```

That's right, just set it to a date in the past. The value doesn't matter, although the `path` does.

## Complete Example

```js
import React from 'react'
import cookies from 'next-cookies'

class NameForm extends React.Component {
  static async getInitialProps(ctx) {
    return {
      initialName: cookies(ctx).name || ''
    }
  }

  constructor(props) {
    super(props);
    this.state = {name: props.initialName || ''};
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(event) {
    const newName = event.target.value;
    this.setState({name: newName});
    document.cookie = `name=${newName}; path=/`;
  }

  reset() {
    this.setState({name: ''});
    document.cookie = 'name=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }

  render() {
    return (
      <div>
        <p>Hi {this.state.name}</p>
        <p>Change cookie: <input
            type="text"
            placeholder="Your name here"
            value={this.state.name}
            onChange={this.handleChange}
          />!
        </p>
        <p>Delete cookie: <button onClick={this.reset}>Reset</button></p>
      </div>
    );
  }
}

export default NameForm
```

## More Information

* https://www.npmjs.com/package/component-cookie
* https://www.npmjs.com/package/cookie
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
* https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
* https://tools.ietf.org/html/rfc6265


## License

MIT
