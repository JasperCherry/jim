const getDigitalArray = require('./getDigitalArray');


const getDigitalPhrases = (phrases, commonWords) => {
  const digitalPhrases = [];
  for (let x = 0; x < phrases.length; x++) {
    const questions = [];
    for (let z = 0; z < phrases[x][0].length; z++) {
      const question = getDigitalArray(phrases[x][0][z], commonWords);
      questions.push(question);
    }

    const answer = getDigitalArray(phrases[x][1], commonWords);
    digitalPhrases.push([questions, answer]);
  }

  return digitalPhrases;
}


module.exports = getDigitalPhrases;
