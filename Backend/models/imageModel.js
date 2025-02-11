const mongoose = require('mongoose')
const imageSchema = new mongoose.Schema({
  title: String,
  color: String,
  rating: String,
  imageUrl: String, // Stores either a file path or an external URL
});
module.exports= mongoose.model("image",imageSchema)