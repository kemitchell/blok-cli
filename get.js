module.exports = function() {
  var get = require('blok-get')
    .bind(this, require('./level')())
  var digest = process.argv[3]
  get(digest, function(error, value) {
    console.log(require('blok-stringify')(value)) }) }
