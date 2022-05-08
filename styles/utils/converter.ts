export const convertNumberToPhonewords = (numericInput: number | String) => {
  const phoneWordArray = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const convertedArray: string[] = [];
  const numberToWord = (
    inputArray: any[],
    index: number,
    resultArray: string[],
    inputLength: number
  ) => {
    if (index == inputLength) {
      const result = resultArray.join("");
      convertedArray.push(result);
      return;
    }
    for (let i = 0; i < phoneWordArray[inputArray[index]].length; i++) {
      resultArray.push(phoneWordArray[inputArray[index]][i]);
      numberToWord(inputArray, index + 1, resultArray, inputLength);
      resultArray.pop();
      if (inputArray[index] === 0 || inputArray[index] === 1) {
        return;
      }
    }
  };

  ((input) => {
    let index = 0;
    let resultArray: string[] = [];
    const inputToArray: string[] = input.toString().split("");
    let inputLength = inputToArray.length;
    numberToWord(inputToArray, index, resultArray, inputLength);
  })(numericInput);

  return convertedArray.join(" ");
};
