require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

require("./db/Conn");
const router = require("./routes/router");

const defaultdata = require("./insertdata/default");
const Mdata = require("./insertdata/mobile");
const Edata = require("./insertdata/electronics");
const Mendata = require("./insertdata/men");
const womendata = require("./insertdata/women");
const Homekitchendata = require("./insertdata/homekitchen");

const port = 5000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`connection start on port ${port}`);
});

// defaultdata();
// Mdata();
// Edata();
// Mendata();
// womendata();
// Homekitchendata();
