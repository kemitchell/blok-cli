module.exports = function() {
  require('./level')().createKeyStream()
    .on('data', function(key) {
      console.log(key) }) }
