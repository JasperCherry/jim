const readCommonWords = require('./utilityFunctions/readCommonWords');
const getDigitalPhrases = require('./utilityFunctions/getDigitalPhrases');
const getOutput = require('./utilityFunctions/getOutput');
const phrases = require('./data/phrases');
const stdin = process.openStdin();

const start = async () => {
  const commonWords = await readCommonWords();
  const digitalPhrases = getDigitalPhrases(phrases, commonWords);
  let currentConversationState = new Array(commonWords.length).fill(0);

  console.log('Hi, ask me about the picture');

  stdin.addListener("data", function(d) {
    let input = d.toString().trim();
    let output = getOutput(commonWords, phrases, digitalPhrases, currentConversationState, input);
    currentConversationState = output.currentConversationState;
    console.log(output.phrase);
    console.log(output.score);
  });
}


start();
