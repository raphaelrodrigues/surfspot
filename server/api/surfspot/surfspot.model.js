'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SurfspotSchema = new Schema({
  name: String,
  id: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Surfspot', SurfspotSchema);