/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parens = [];
  for (let paren of s) {
    // console.log(parens, paren);

    switch (paren) {
      case "]":
        if (parens.pop() !== "[") return false;
        break;

      case ")":
        if (parens.pop() !== "(") return false;
        break;

      case "}":
        if (parens.pop() !== "{") return false;
        break;

      default:
        parens.push(paren);
        break;
    }
  }
  // console.log(parens);

  return parens.length === 0;
};

console.log(isValid("()[]{}"));
