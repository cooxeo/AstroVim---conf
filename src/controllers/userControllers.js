const users = [
  { id: 1, name: "cooxeo" },
  { id: 2, name: "gilganesh" },
];

export const getUsers = (req, res) => {
  res.status(200).send(users);
  console.log(users);
};

export const createUser = (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: `user ${name} with mail ${email} created successfully!`,
  });
  console.log("user created successfully");
};

export const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  res.json({
    message: `user ${userId} updated to ${name}, ${email}`,
  });
};

export const addUser = (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(404).json({ error: "id and name is required" });
  }
  const newUser = { id, name };
  users.push(newUser);
  res.status(201).send(users);
  console.log("cooxeo");
};

export const deleteUser = (req, res) => {
  users.pop();
  res.status(200).send("User successfully deleted");
};
