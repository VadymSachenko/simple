'use strict';


/**
 *
 * limit Integer  (optional)
 * offset Integer Index of the first playlist to return. (0=start at the beginning, 10 = skip the first 10, etc.) (optional)
 * search String Return playlists whose name contains this string (optional)
 * no response value expected for this operation
 **/
exports.paylistGET = function(limit,offset,search) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * playlistId String  (optional)
 * no response value expected for this operation
 **/
exports.playlistPlaylist_idDELETE = function(playlistId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

