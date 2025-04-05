const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mockUser = {
  email: "test@example.com",
  password: "password123",
};

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (email === mockUser.email && password === mockUser.password) {
    return res
      .status(200)
      .json({ message: "Login successful", user: { email } });
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
});

app.listen(4000, () =>
  console.log("Mock backend running on http://localhost:4000")
);
