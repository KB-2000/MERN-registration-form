const express = require("express");
const userRoutes = require("./routes/userRoutes");
const db = require("./config/dbConfig");
const cors = require('cors')
// const productRoutes = require('./routes/productRoutes')
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors())
db()
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log("failed to connect db"));
app.get("/", (req, res) => {
  res.json({ status: "api is working fine" });
});

app.use("/user", userRoutes);
// app.use('/product',productRoutes)

app.listen(port, (err) => {
  if (!err) {
    console.log("server started on port " + port);
  }
});
