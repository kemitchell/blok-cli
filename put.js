module.exports = function() {
  var input = ''
  process.stdin
    .on('data', function(buffer) {
      input += buffer.toString() })
    .on('end', function() {
      require('blok-put')(
        require('./level')(),
        require('blok-stringify'),
        require('sha256'),
        require('blok-parse')(input),
        function(error, digest) {
          console.log(digest) }) }) }
