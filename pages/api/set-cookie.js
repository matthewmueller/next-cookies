export default (req, res) => {
    res.setHeader('Set-Cookie', 'test_cookie=test value; path=/;')
    res.end('test_cookie set');
  }
  