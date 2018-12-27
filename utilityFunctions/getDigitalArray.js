const getDigitalArray = (string, commonWords) => {
  let stringArray = string.toLowerCase().split(' ');
  let digitalArray = new Array(commonWords.length).fill(0);

  for (let x = 0; x < stringArray.length; x++) {
    for (let z = 0; z < commonWords.length; z++) {
      if (stringArray[x] === commonWords[z]) {
        digitalArray[z] = 1;
        break;
      }
    }
  }

  return digitalArray;
}


module.exports = getDigitalArray;
