/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
  console.log(str);
  for (let [i, j] = [0, str.length - 1]; i <= j; i++, j--) {
    console.log(i, j, str[i], str[j]);
    if (str[i] !== str[j]) return false;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
