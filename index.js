module.exports = function(str) {
  var hash = 5381;

  for(let i = str.length - 1; i >= 0; i--) {
    hash = ((hash << 5) + hash) ^ str.charCodeAt(i);
  }
  // Convert signed int to an unsigned by doing an unsigned bitshift
  return hash >>> 0;
}
