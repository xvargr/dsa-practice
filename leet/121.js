/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = 0;
  let maxProf = 0;
  for (let sell = 1; sell < prices.length; sell++) {
      if (prices[sell] < prices[buy]) {
          buy = sell;
          continue;
      }
      const prof = prices[sell] - prices[buy];
      maxProf = Math.max(maxProf, prof);
  }
  return maxProf;
};