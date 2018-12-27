const updateCurrentConversationState = (currentConversationState, digitalString) => {
  for (let x = 0; x < currentConversationState.length; x++) {
    currentConversationState[x] = currentConversationState[x] / 2;
    if (currentConversationState[x] < 0.1) {
      currentConversationState[x] = 0;
    }
  }

  for (let x = 0; x < digitalString.length; x++) {
    if (digitalString[x] === 1) {
      currentConversationState[x] = 1;
    }
  }

  return currentConversationState;
}


module.exports = updateCurrentConversationState;
