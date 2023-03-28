const mongoose = require("mongoose");
const addressShcema = new mongoose.Schema({
  email: String,
  pin: String,
  house: String,
  area: String,
  landmark: Number,
  city: Number,
  state: String,
  time: String,
});

const addresses = new mongoose.model("addresses", addressShcema);
module.exports = address;
