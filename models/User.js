const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: "String is required",
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
