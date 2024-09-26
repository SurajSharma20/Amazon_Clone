const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  user_id: { type: String, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile_no: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  password: { type: String, required: true },
  c_password: { type: String, required: true },
  
});

const newUser = mongoose.model('Users', userSchema);

module.exports = newUser;
