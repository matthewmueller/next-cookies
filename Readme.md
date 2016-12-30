# Next Cookies

Tiny little function for getting cookies on both client & server with next.js.

This allows you to set the cookie client-side, but perform server-side rendering of your components.

## Example

```js
export default class Me extends Component {
  static async getInitialProps (ctx) {
    const { token } = cookies(ctx)
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render (props) {
    return (
      <div>me</div>
    )
  }
}

// set the cookie
document.cookie = 'token=whatever'
```

## Installation

```
yarn add next-cookies
```

## License

MIT
