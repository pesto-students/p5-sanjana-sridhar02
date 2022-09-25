/**
 * Problem 6.4 : Best time to buy and sell stock
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Example 1: Input: prices = [7,1,5,3,6,4] Output: 5
 *
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 *
 *  Example 2: Input: prices =[7,6,4,3,1] Output: 0
 *
 * Explanation: In this case, no transactions are done and the maxprofit = 0 Constraints: 1 <= prices.length <= 105 0 <= prices[i] <= 104
 */

// we use two pointer's method

const maxProfit = (prices) => {
  let sellIdx = prices.length - 1;
  let profit = 0;
  for (let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
    let buyVal = prices[buyIdx];
    let sellVal = prices[sellIdx];
    console.log({ buyIdx, sellIdx, buyVal, sellVal });
    if (buyVal - sellVal >= 0) {
      sellIdx = buyIdx;
    } else {
      let price = sellVal - buyVal;
      profit = Math.max(profit, price);

      console.log({ price, profit });
    }
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// Time complexity: O(n)
// Space complexity : O(1)

const maxProfit2 = (prices) => {
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length - 1; j++) {
      const currentProfit = prices[j];
      if (currentProfit > profit) {
        profit = currentProfit;
      }
    }
  }

  return profit;
};
// Time complexity: O(n2) n square so we don't consider this
// Space complexity : O(1)
