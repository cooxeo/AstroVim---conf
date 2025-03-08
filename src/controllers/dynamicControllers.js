export const getUsers = (req, res) => {
  const username = req.params.username;
  res.send(`welcome ${username}`);
};

export const getUser = (req, res) => {
  const keyword = req.query.keyword;
  res.send(`searching for ${keyword}`);
};