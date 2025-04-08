/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  function travel(remain, opened, path) {
    if (opened > remain) return;
    if (remain === 0) {
      result.push(path);
      return;
    }

    // console.log(remain, opened, path);

    travel(remain - 1, opened + 1, path + "(");

    if (opened >= 1) {
      travel(remain - 1, opened - 1, path + ")");
    }
  }

  travel(n * 2, 0, "");

  return result;
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
