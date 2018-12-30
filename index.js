const readCommonWords = require('./functions/readCommonWords');
const getDigitalPhrases = require('./functions/getDigitalPhrases');
const getOutput = require('./functions/getOutput');
const phrases = require('./data/phrases');
const stdin = process.openStdin();


const start = async () => {
  const commonWords = await readCommonWords();
  const digitalPhrases = getDigitalPhrases(phrases, commonWords);
  let currentConversationState = new Array(commonWords.length).fill(0);


  console.log('Hi, ask me something about the picture');


  stdin.addListener("data", function(d) {
    let input = d.toString().trim();
    let output = getOutput(commonWords, phrases, digitalPhrases, currentConversationState, input);
    currentConversationState = output.currentConversationState;
    console.log('answer--->',output.phrase);
    // console.log(output.score);
  });
}


start();
