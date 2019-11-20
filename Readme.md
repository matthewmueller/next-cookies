# Next Cookies

[![Build Status](https://travis-ci.org/matthewmueller/next-cookies.svg?branch=master)](https://travis-ci.org/matthewmueller/next-cookies)

Tiny little function for getting cookies on both client & server with [next.js](https://nextjs.org).

This enables easy client-side and server-side rendering of pages that depend on cookies.

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

This library does not support setting cookies. However, this is how to do it in client-side code:

```js
document.cookie = `foo=bar; path=/`;
```

This sets a cookie named `foo` to the value `bar`. 

The `path` portion is optional but usually desired. 

An expiration date may be appended (see below), otherwise the cookie will be deleted whenever the browser is closed.

### Delete a cookie:

This library does not support deleting cookies. However, this is how to do it in client-side code:

```js
document.cookie = `foo=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
```

The value doesn't matter, although the `path` does. The expiration date must be in the past. 

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

See, also, the test app: https://github.com/matthewmueller/next-cookies/blob/master/tests/test-app/pages/cookies.js

## More Information

* https://www.npmjs.com/package/universal-cookie
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
* https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
* https://tools.ietf.org/html/rfc6265


## License

MIT
