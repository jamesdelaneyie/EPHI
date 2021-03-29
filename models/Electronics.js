//models/Electronics.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var electronicsSchema = new Schema({
  name: String,
  make: String,
  model: String,
  location: String,
  cost: Number,
  value: Number,
  purchase_date: Date  
});
module.exports = mongoose.model('Electronics', electronicsSchema);
