export default (req, res) => {
  res.setHeader(
    "Set-Cookie",
    "test_cookie=%7B%22foo%22%3A%22asdf%22%7D; path=/;"
  );
  res.end("test_cookie set");
};
