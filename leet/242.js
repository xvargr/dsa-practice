/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.len !== t.len) return false;

  const freq = {};

  for (let i of s) {
    freq[i] = (freq[i] ?? 0) + 1;
  }
  for (let j of t) {
    if (!freq[j]) return false;
    freq[j] -= 1;
    if (freq[j] < 0) return false;
  }
  for (let k in freq) {
    if (freq[k] !== 0) return false;
  }

  return true;
};

console.log(isAnagram("abcd", "abcg"));
