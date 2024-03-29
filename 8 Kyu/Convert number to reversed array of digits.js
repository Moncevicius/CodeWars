/**
 * Convert number to reversed array of digits
 *
 * Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 * Example(Input => Output):
 *
 * 348597 => [7,9,5,8,4,3]
 * 0 => [0]
 *
 * @param {number} n
 * @returns {array}
 * 
 */

function digitize(n) {
    //code here
    return Array.from(String(n)).reverse().map(Number);
}