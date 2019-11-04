export default (req, res) => {
  res.setHeader("Set-Cookie", "test_cookie=; path=/; Expires=0");
  res.end("test_cookie deleted");
};
