const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostitSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: "String is required",
  },
  email: {
    type: String,
    trim: true,
    required: "Email is required",
  },
});

const Postit = mongoose.model("Postit", PostitSchema);

module.exports = Postit;
