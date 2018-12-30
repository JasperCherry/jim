const Promise = require('bluebird');
var fs = Promise.promisifyAll(require("fs"));


const readCommonWords = async () => {
  const data = await fs.readFileAsync('./data/20k_words_dictionary.txt', 'utf8');
  const commonWords = data.match(/[^\r\n]+/g);

  return commonWords;
}


module.exports = readCommonWords;
