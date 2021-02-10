const mongoose = require('mongoose');

var gridSchema = mongoose.Schema({
  user: String,
  partie: Number,
  as: Number,
  deux: Number,
  trois: Number,
  quatre: Number,
  cinq: Number,
  six: Number,
  suite: Number,
  full: Number,
  carre: Number,
  yam: Number,
  min: Number,
  max: Number,
  total2: Number,
});

module.exports = mongoose.model('grid', gridSchema);