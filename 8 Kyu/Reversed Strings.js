/**
 * Complete the solution so that it reverses the string passed into it.
 *
 * 'world'  =>  'dlrow'
 * 'word'   =>  'drow'
 *
 * @param {string} str
 * @returns {string}
 */

function solution(str){
    return str.split('').reverse().join('');
}