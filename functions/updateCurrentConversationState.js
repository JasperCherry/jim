const updateCurrentConversationState = (currentConversationState, digitalString, isQuestion) => {
  // if the phrase comes from question avoid value weakening
  if(isQuestion) {
    for (let x = 0; x < currentConversationState.length; x++) {
      currentConversationState[x] = currentConversationState[x] * 0.45;
      if (currentConversationState[x] < 0.1) {
        currentConversationState[x] = 0;
      }
    }
  }


  for (let x = 0; x < digitalString.length; x++) {
    if (digitalString[x] === 1) {
      // if the word comes from answer give it less meaningful value
      if(isQuestion) {
        currentConversationState[x] = 1;
      } else {
        // if the word appreared in question and has higher value, dont change it
        if(currentConversationState[x] < 0.5) {
          currentConversationState[x] = 0.5;
        }
      }
    }
  }


  return currentConversationState;
}


module.exports = updateCurrentConversationState;
