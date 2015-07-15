module.exports = function() {
  return require('levelup')(
    require('path').join(process.cwd(), '.blok'),
    { db: require('leveldown') }) }
