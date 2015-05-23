/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Surfspot = require('./surfspot.model');

exports.register = function(socket) {
  Surfspot.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Surfspot.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('surfspot:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('surfspot:remove', doc);
}