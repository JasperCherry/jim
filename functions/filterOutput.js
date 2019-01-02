let lastAnswer = '';

const filterOutput = (output) => {
  if (output.phrase === 'Sorry, you need to be more specific for me to understand') {
    return 'answer--->',output.phrase;
  } else if (lastAnswer === output.phrase) { // if the answer is repeating then bot asks to be more specific
    return 'answer---> Sorry, you need to be more specific for me to understand';
  } else {
    lastAnswer = output.phrase;
    return 'answer--->',output.phrase;
  }
}


module.exports = filterOutput;
