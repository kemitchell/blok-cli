module.exports = function() {
  var put = require('blok-put')
    .bind(this, require('./level')(), require('sha256'))
  var input = ''
  process.stdin
    .on('data', function(buffer) {
      input += buffer.toString() })
    .on('end', function() {
      put(require('blok-parse')(input), function(error, digest) {
        console.log(digest) }) }) }
