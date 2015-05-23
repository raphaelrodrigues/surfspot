'use strict';

var _ = require('lodash');
var Surfspot = require('./surfspot.model');

// Get list of surfspots
exports.index = function(req, res) {
  Surfspot.find(function (err, surfspots) {
    if(err) { return handleError(res, err); }
    return res.json(200, surfspots);
  });
};

// Get a single surfspot
exports.show = function(req, res) {
  Surfspot.findById(req.params.id, function (err, surfspot) {
    if(err) { return handleError(res, err); }
    if(!surfspot) { return res.send(404); }
    return res.json(surfspot);
  });
};

// Creates a new surfspot in the DB.
exports.create = function(req, res) {
  Surfspot.create(req.body, function(err, surfspot) {
    if(err) { return handleError(res, err); }
    return res.json(201, surfspot);
  });
};

// Updates an existing surfspot in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Surfspot.findById(req.params.id, function (err, surfspot) {
    if (err) { return handleError(res, err); }
    if(!surfspot) { return res.send(404); }
    var updated = _.merge(surfspot, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, surfspot);
    });
  });
};

// Deletes a surfspot from the DB.
exports.destroy = function(req, res) {
  Surfspot.findById(req.params.id, function (err, surfspot) {
    if(err) { return handleError(res, err); }
    if(!surfspot) { return res.send(404); }
    surfspot.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}