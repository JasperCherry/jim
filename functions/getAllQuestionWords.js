const getAllQuestionWords = (phrases) => {
  const allQuestionWords = [];

  for (let x = 0; x < phrases.length; x++) {
    for (let z = 0; z < phrases[x][0].length; z++) {
      const phraseWords = phrases[x][0][z].toLowerCase().split(' ');
      for (let w = 0; w < phraseWords.length; w++) {
        if (allQuestionWords.indexOf(phraseWords[w]) === -1) {
          allQuestionWords.push(phraseWords[w]);
        }
      }
    }
  }

  return allQuestionWords;
}


module.exports = getAllQuestionWords;
