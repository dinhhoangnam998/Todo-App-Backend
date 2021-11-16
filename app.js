// require("dotenv").config();
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const port = process.env.PORT || 8000;

app.use("/", require("./route"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
