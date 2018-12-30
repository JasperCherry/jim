const updateCurrentConversationState = (currentConversationState, digitalString, question) => {
  // if the phrase comes from question avoid value weakening
  if(question) {
    for (let x = 0; x < currentConversationState.length; x++) {
      currentConversationState[x] = currentConversationState[x] * 0.5;
      if (currentConversationState[x] < 0.1) {
        currentConversationState[x] = 0;
      }
    }
  }


  for (let x = 0; x < digitalString.length; x++) {
    if (digitalString[x] === 1) {
      // if the word comes from answer give it less meaningful value
      if(question) {
        currentConversationState[x] = 1;
      } else {
        currentConversationState[x] = 0.5;
      }
    }
  }


  return currentConversationState;
}


module.exports = updateCurrentConversationState;
