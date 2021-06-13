
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id:  String, // String is shorthand for {type: String}
  name: String,
  lastName: String,
  email: String,
  birthdate: Date,
  
},
{timestamps: true}
);


module.exports = mongoose.model("users", userSchema);

