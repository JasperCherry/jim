const readCommonWords = require('./functions/readCommonWords');
const getDigitalPhrases = require('./functions/getDigitalPhrases');
const getOutput = require('./functions/getOutput');
const phrases = require('./data/phrases');
const stdin = process.openStdin();


const start = async () => {
  const commonWords = await readCommonWords();
  const digitalPhrases = getDigitalPhrases(phrases, commonWords);
  let currentConversationState = new Array(commonWords.length).fill(0);
  let lastAnswer = '';


  console.log('start---> Ask me something about the picture');

  // if the answer is repeating then bot asks to be more specific
  stdin.addListener("data", function(d) {
    let input = d.toString().trim();
    let output = getOutput(commonWords, phrases, digitalPhrases, currentConversationState, input);
    currentConversationState = output.currentConversationState;
    if (output.phrase === 'Sorry, you need to be more specific for me to understand') {
      console.log('answer--->',output.phrase);
    } else if (lastAnswer === output.phrase) {
      console.log('answer---> Sorry, you need to be more specific for me to understand');
    } else {
      lastAnswer = output.phrase;
      console.log('answer--->',output.phrase);
    }
  });
}


start();
