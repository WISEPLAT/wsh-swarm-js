var unavailable = function unavailable() {
  throw "This swarm.js function isn't available on the browser.";
};

var fsp = { readFile: unavailable };
var files = { download: unavailable, safeDownloadArchived: unavailable, directoryTree: unavailable };
var os = { platform: unavailable, arch: unavailable };
var path = { join: unavailable, slice: unavailable };
var child_process = { spawn: unavailable };
var mimetype = { lookup: unavailable };
var defaultArchives = {};
var downloadUrl = null;
var request = require("xhr-request-promise");
var bytes = require("wsh-lib/lib/bytes");
var hash = require("./swarm-hash.js");
var pick = require("./pick.js");
var swarm = require("./swarm");

module.exports = swarm({
  fsp: fsp,
  files: files,
  os: os,
  path: path,
  child_process: child_process,
  defaultArchives: defaultArchives,
  mimetype: mimetype,
  request: request,
  downloadUrl: downloadUrl,
  bytes: bytes,
  hash: hash,
  pick: pick
});