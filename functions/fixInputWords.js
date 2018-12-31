const levenshtein = require('js-levenshtein');


const fixInputWords = (input, allQuestionWords, commonWords) => {
  const inputWords = input.toLowerCase().split(' ');
  const fixedInputWords = [];

  for (let x = 0; x < inputWords.length; x++) {
    let bestPhraseScore = 2;
    let bestPhrase = '';

    for (let z = 0; z < commonWords.length; z++) {
      if (
        levenshtein(inputWords[x], commonWords[z]) < bestPhraseScore &&
        allQuestionWords.indexOf(commonWords[z]) !== -1
      ) {
        bestPhraseScore = levenshtein(inputWords[x], commonWords[z]);
        bestPhrase = commonWords[z];
      }
    }

    fixedInputWords.push(bestPhrase);
  }

  const fixedInput = fixedInputWords.join(' ');

  return fixedInput;
}


module.exports = fixInputWords;
