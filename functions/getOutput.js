const getDigitalArray = require('./getDigitalArray');
const updateCurrentConversationState = require('./updateCurrentConversationState');


const getOutput = (commonWords, phrases, digitalPhrases, conversationState, input) => {
  const digitalInput = getDigitalArray(input, commonWords);
  let currentConversationState = updateCurrentConversationState(conversationState, digitalInput);
  const bestPhraseMatch = {
    score: 0,
    phrase: '',
    digitalPhrase: [],
  }


  for (let x = 0; x < digitalPhrases.length; x++) {
    for (let p = 0; p < digitalPhrases[x][0].length; p++) {
      let currentPhraseMatchScore = 0;

      for (let z = 0; z < digitalPhrases[x][0][p].length; z++) {
        if (digitalPhrases[x][0][p][z] === 1 && currentConversationState[z] !== 0) {
          currentPhraseMatchScore += currentConversationState[z];
        }

        if (digitalPhrases[x][0][p][z] === 1 && currentConversationState[z] === 0) {
          currentPhraseMatchScore -= 1;
        }
      }

      if (bestPhraseMatch.score < currentPhraseMatchScore) {
        bestPhraseMatch.score = currentPhraseMatchScore;
        bestPhraseMatch.phrase = phrases[x][1];
        bestPhraseMatch.digitalPhrase = digitalPhrases[x][1];
      }
    }
  }


  if (bestPhraseMatch.score > 0) {
    return output = {
      phrase: bestPhraseMatch.phrase,
      digitalPhrase: bestPhraseMatch.digitalPhrase,
      score: bestPhraseMatch.score,
      currentConversationState,
    }
  } else {
    return output = {
      phrase: 'Sorry, I cant understand. You need to be more precise.',
      digitalPhrase: bestPhraseMatch.digitalPhrase,
      score: bestPhraseMatch.score,
      currentConversationState,
    }
  }
}


module.exports = getOutput;
