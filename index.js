const readlineSync = require('readline-sync');
const readCommonWords = require('./functions/readCommonWords');
const getDigitalPhrases = require('./functions/getDigitalPhrases');
const getAllQuestionWords = require('./functions/getAllQuestionWords');
const getOutput = require('./functions/getOutput');
const filterInput = require('./functions/filterInput');
const filterOutput = require('./functions/filterOutput');
const fixInputWords = require('./functions/fixInputWords');
const phrases = require('./data/phrases');
const stdin = process.openStdin();


const start = async () => {
  const commonWords = await readCommonWords();
  const digitalPhrases = getDigitalPhrases(phrases, commonWords);
  const allQuestionWords = getAllQuestionWords(phrases);
  let currentConversationState = new Array(commonWords.length).fill(0);


  console.log('start---> Ask me something about the picture');


  while (true) {
    let input = readlineSync.question();
    input = filterInput(input);
    input = fixInputWords(input, allQuestionWords, commonWords);

    let output = getOutput(commonWords, phrases, digitalPhrases, currentConversationState, input);
    currentConversationState = output.currentConversationState;

    const outputPhrase = filterOutput(output);
    console.log(outputPhrase);

    /*
    // show the current valued words and points
    console.log('-----------------');
    for (let x = 0; x < currentConversationState.length; x++) {
      if (currentConversationState[x] !== 0) {
        console.log(commonWords[x], currentConversationState[x]);
      }
    }
    console.log('-----------------');
    */
  }
};


start();
