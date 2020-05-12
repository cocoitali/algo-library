// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money.

// Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? 
//For example, if prices = [1,2,3,4] and Mark has k=7 to spend, he can buy items [1,2,3] for 6 or [3,4] for 7 units of currency. He would choose the first group of 3 items.

// Function Description
// Complete the function maximumToys in the editor below. It should return an integer representing the maximum number of toys Mark can purchase.

// maximumToys has the following parameter(s):
// prices: an array of integers representing toy prices
// k: an integer, Mark's budget


function maximumToys(prices, k) {
    //sort prices in ascending
        prices.sort((a,b) => a - b)
    
        //add prices to get total, for/of loop b/c do not need index
        // set totalPrice variable
        // set totalItems variable
        let totalPrice = 0
        let totalItems = 0
        for (let p of prices) {
            if (totalPrice + p <= k) { //if totalPrice + next price is less than or equal to k, then add that next price. Also add 1 to totalItems
                totalPrice += p;
                totalItems++;
            } else {
                return totalItems;
            }
        }
        return totalItems;
    }