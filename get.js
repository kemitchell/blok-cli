module.exports = function() {
  function showUsage() {
    console.error('Usage: blok get <SHA-256 hex digest>')
    process.exit(1) }
  if (process.argv.length < 4) {
    showUsage() }
  var digest = process.argv[3]
  if (!require('is-sha-256-hex-digest')(digest)) {
    showUsage() }
  require('blok-get')(
    require('./level')(),
    require('blok-parse'),
    digest,
    function(error, value) {
      console.log(require('blok-stringify')(value)) }) }
