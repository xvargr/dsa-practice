/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const pairs = [];
  const freqs = {};
  for (let stringIdx in strs) {
    const string = strs[stringIdx];
    // console.log(string);
    freqs[string] = {};
    for (let letter of string) {
      // console.log(letter);
      freqs[string][letter] = (freqs[string][letter] ?? 0) + 1;
    }

    console.log(freqs);

    let matched = true;
    for (let pair of pairs) {
      if (!matched) break;
      // console.log(pair[0]);
      console.log(freqs[pair[0]], freqs[string]);

      if (
        Object.keys(freqs[pair[0]]).length !== Object.keys(freqs[string]).length
      ) {
        matched = false;
        continue;
      }
      for (let i of freqs[string]) {
        console.log("i", i);
      }
    }
    if (!matched) pairs.push([string]);

    console.log(pairs);
  }

  // console.log(freqs);

  // for (let freqIdx in freqs) {
  //   const freq = freqs[freqIdx];

  //   // console.log(freq);
  //   let matched = false;
  //   for (let pairIdx in pairs) {
  //     // const pair = pairs[pairIdx];
  //     // console.log(pair, Object.keys(freqs[pairIdx]), Object.keys(freq)); //error
  //     if (Object.keys(freqs[pairIdx]).length !== Object.keys(freq).length) {
  //       continue;
  //     }
  //     matched = true;
  //     for (let f in freq) {
  //       if (!matched) break;
  //       if (freq[f] !== freqs[pairIdx][f]) matched = false;
  //       console.log(f, freq[f], freqs[pairIdx][f]);
  //       // console.log(f, freqs[pairIdx][f]);
  //     }
  //     if (matched) pairs[pairIdx].push(strs[freqIdx]);
  //   }
  //   if (!matched) pairs.push([strs[freqIdx]]);
  // }

  console.log(pairs);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
