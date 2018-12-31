const readCommonWords = require('./functions/readCommonWords');
const getDigitalPhrases = require('./functions/getDigitalPhrases');
const getAllQuestionWords = require('./functions/getAllQuestionWords');
const getOutput = require('./functions/getOutput');
const filterInput = require('./functions/filterInput');
const fixInputWords = require('./functions/fixInputWords');
const phrases = require('./data/phrases');
const stdin = process.openStdin();


const start = async () => {
  const commonWords = await readCommonWords();
  const digitalPhrases = getDigitalPhrases(phrases, commonWords);
  const allQuestionWords = getAllQuestionWords(phrases);
  let currentConversationState = new Array(commonWords.length).fill(0);
  let lastAnswer = '';


  console.log('start---> Ask me something about the picture');

  stdin.addListener("data", function(d) {
    let input = d.toString().trim();
    input = filterInput(input);
    input = fixInputWords(input, allQuestionWords, commonWords);

    let output = getOutput(commonWords, phrases, digitalPhrases, currentConversationState, input);
    currentConversationState = output.currentConversationState;


    if (output.phrase === 'Sorry, you need to be more specific for me to understand') {
      console.log('answer--->',output.phrase);
    } else if (lastAnswer === output.phrase) { // if the answer is repeating then bot asks to be more specific
      console.log('answer---> Sorry, you need to be more specific for me to understand');
    } else {
      lastAnswer = output.phrase;
      console.log('answer--->',output.phrase);
    }


    /*
    // show the current valued words and points
    console.log('XXX');
    for (let x = 0; x < currentConversationState.length; x++) {
      if (currentConversationState[x] !== 0) {
        console.log(commonWords[x], currentConversationState[x]);
      }
    }
    console.log('XXX');
    */
  });
}


start();
