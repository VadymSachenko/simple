'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.paylistGET = function paylistGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var search = req.swagger.params['search'].value;
  Default.paylistGET(limit,offset,search)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.playlistPlaylist_idDELETE = function playlistPlaylist_idDELETE (req, res, next) {
  var playlistId = req.swagger.params['playlist-id'].value;
  Default.playlistPlaylist_idDELETE(playlistId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
