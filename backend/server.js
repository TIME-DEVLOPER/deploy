const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config()

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({
    message: "server properly responded",
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});