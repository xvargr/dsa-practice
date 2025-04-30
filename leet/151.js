/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let words = [];
  let word = "";
  let wCount = -1;
  for (let i = 0; i < s.length; i++) {
    // console.log(wCount, word, words);
    const char = s[i];

    if (char === " ") {
      if (word === "") continue;
      words[wCount] = word;
      word = "";
      continue;
    }

    if (word === "") wCount++;
    word = word + char;
  }

  if (word !== "") words[wCount] = word;

  // console.log(wCount, word, words);

  return words.reverse().join(" ");
};

console.log(reverseWords("a good   example"));
