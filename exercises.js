/**
 * Exercise 11
 *
 * Write a function which converts the input string to uppercase.
 */

function makeUpperCase(str) {
    // Code here
    return str.toUpperCase();
}

/**
 * Exercise 12
 *
 * Write a function to split a string and convert it into an array of words.
 * Examples (Input ==> Output):
 *
 * "Robin Singh" ==> ["Robin", "Singh"]
 *
 * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
 */

function stringToArray(string){
    // code code code
    return string.split(' ');
}

/**
 * Exercise 13
 *
 * Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts
 * the number of sheep present in the array (true means present).
 *
 * For example,
 *
 * [true,  true,  true,  false,
 *   true,  true,  true,  true ,
 *   true,  false, true,  false,
 *   true,  false, false, true ,
 *   true,  true,  true,  true ,
 *   false, false, true,  true]
 *
 * The correct answer would be 17.
 *
 * Hint: Don't forget to check for bad values like null/undefined
 */

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let total = 0;
    arrayOfSheep.forEach(v => v ? total++ : total );
    return total;
}

/**
 * Exercise 14
 *
 * Given the triangle of consecutive odd numbers:
 *
 *              1
 *           3     5
 *        7     9    11
 *    13    15    17    19
 * 21    23    25    27    29
 * ...
 *
 * Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
 *
 * 1 -->  1
 * 2 --> 3 + 5 = 8
 */

function rowSumOddNumbers(n) {
    // TODO
    return n * n * n;
}

/**
 * Exercise 15
 *
 * Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives
 * become positives.
 *
 * invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
 * invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
 * invert([]) == []
 *
 * You can assume that all values are integers. Do not mutate the input array/list.
 */

function invert(array) {
    return array.map(v => -v);
}

/**
 * Exercise 16
 *
 * Build a function that returns an array of integers from n to 1 where n>0.
 *
 * Example : n=5 --> [5,4,3,2,1]
 */

const reverseSeq = n => {
    let result = [];
    for(let i=n; i > 0; i--){
        result.push(i);
    }
    return result;
};

/**
 * Exercise 17
 *
 * This time no story, no theory. The examples below show you how to write function accum:
 * Examples:
 *
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"
 *
 * The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

function accum(s) {
    // your code
    let result = "";
    for(let i=0; i < s.length; i++){
        result += s[i].toUpperCase();
        for(let j=i; j > 0; j--){
            result += s[i].toLowerCase();
        }
        i != s.length-1 ? result += "-" : 0;
    }
    return result;
}

/**
 * Exercise 18
 *
 * It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a
 * string. You're given one parameter, the original string. You don't have to worry with strings with less than two
 * characters.
 */

function removeChar(str){
    //You got this!
    return str.substr(1, str.length-2);
};

/**
 * Exercise 19
 *
 * You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
 *
 * Array can contain numbers or strings. X can be either.
 *
 * Return true if the array contains the value, false if not.
 */

function check(a, x) {
    // your code here
    return a.includes(x);
}

/**
 * Exercise 20
 *
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
 *
 * The output should be two capital letters with a dot separating them.
 *
 * It should look like this:
 *
 * Sam Harris => S.H
 *
 * patrick feeney => P.F
 */

function abbrevName(name){
    // code away
    return name.split(' ').map(v => v.charAt(0).toUpperCase()).join(".");
}

/**
 * Exercise 21
 *
 * Introduction
 *
 * The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
 * Task
 *
 * Given a year, return the century it is in.
 * Examples
 *
 * 1705 --> 18
 * 1900 --> 19
 * 1601 --> 17
 * 2000 --> 20
 */

function century(year) {
    // Finish this :)
    return Math.ceil(year/100);
}

/**
 * Exercise 22
 *
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that
 * determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram.
 * Ignore letter case.
 *
 * Example: (Input --> Output)
 *
 * "Dermatoglyphics" --> true
 * "aba" --> false
 * "moOse" --> false (ignore letter case)
 */

function isIsogram(str){
    let result = str.toLowerCase().split('').sort();
    for(let i=0; i < result.length-1; i++){
        if(result[i] == result[i+1]) return false;
    }
    return true;
}

/**
 * Exercise 23
 *
 * Implement a function which convert the given boolean value into its string representation.
 *
 * Note: Only valid inputs will be given.
 */

function booleanToString(b){
    //your code here
    return b ? "true" : "false";
}

/**
 * Exercise 24
 *
 * Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork
 * has 'm' pages.
 *
 * Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
 * Example:
 *
 * n= 5, m=5: 25
 * n=-5, m=5:  0
 */

function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0;
}

/**
 * Exercise 25
 *
 * Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated
 * exactly n times.
 * Examples (input -> output)
 *
 * 6, "I"     -> "IIIIII"
 * 5, "Hello" -> "HelloHelloHelloHelloHello"
 */

function repeatStr (n, s) {
    return s.repeat(n);
}

/**
 * Exercise 26
 *
 * Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument
 * (also a string).
 *
 * Examples:
 *
 * solution('abc', 'bc') // returns true
 * solution('abc', 'd') // returns false
 */

function solution(str, ending){
    // TODO: complete
    return str.endsWith(ending);
}

/**
 * Exercise 27
 *
 * The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with
 * an application form that will tell prospective members which category they will be placed.
 *
 * To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club,
 * handicaps range from -2 to +26; the better the player the lower the handicap.
 * Input
 *
 * Input will consist of a list of pairs. Each pair contains information for a single potential member. Information
 * consists of an integer for the person's age and an integer for the person's handicap.
 * Output
 *
 * Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective
 * member is to be placed in the senior or open category.
 * Example
 *
 * input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
 * output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
 */

function openOrSenior(data){
    for(let i=0; i < data.length; i++){
        data[i] = data[i][0] >= 55 && data[i][1] > 7 ? "Senior" : "Open";
    }
    return data;
}

/**
 * Exercise 28
 *
 * Summation
 *
 * Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer
 * greater than 0.
 *
 * For example:
 *
 * summation(2) -> 3
 * 1 + 2
 *
 * summation(8) -> 36
 * 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
 */

var summation = function (num) {
    // Code here
    let total = 0;
    for(let i= num; i > 0; i--){
        total += i;
    }
    return total;
}

/**
 * Exercise 29
 *
 * There is a bus moving in the city, and it takes and drop some people in each bus stop.
 *
 * You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into
 * bus (The first item) and number of people get off the bus (The second item) in a bus stop.
 *
 * Your task is to return number of people who are still in the bus after the last bus station (after the last array).
 * Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are
 * probably sleeping there :D
 *
 * Take a look on the test cases.
 *
 * Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return
 * integer can't be negative.
 *
 * The second value in the first integer array is 0, since the bus is empty in the first bus stop.
 */

var number = function(busStops){
    // Good Luck!
    let ins = 0;
    let out = 0;
    for(let i=0; i < busStops.length; i++){
        ins += busStops[i][0];
        out += busStops[i][1];
    }
    return ins - out;
}

/**
 * Exercise 30
 *
 * Your task is to create a function that does four basic mathematical operations.
 *
 * The function should take three arguments - operation(string/char), value1(number), value2(number).
 * The function should return result of numbers after applying the chosen operation.
 * Examples(Operator, value1, value2) --> output
 *
 * ('+', 4, 7) --> 11
 * ('-', 15, 18) --> -3
 * ('*', 5, 5) --> 25
 * ('/', 49, 7) --> 7
 */

function basicOp(operation, value1, value2)
{
    // Code
    switch(operation){
        case "+":
            return value1 + value2;
            break;
        case "-":
            return value1 - value2;
            break;
        case "*":
            return value1 * value2;
            break;
        case "/":
            return value1 / value2;
            break;
        default:
            break;
    }
}

/**
 * Exercise 31
 *
 * Return the number (count) of vowels in the given string.
 *
 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 *
 * The input string will only consist of lower case letters and/or spaces.
 */

function getCount(str) {
    let total = 0;
    for(let i=0; i < str.length; i++){
        str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ? total++ : 0;
    }
    return total;
}

/**
 * Exercise 32
 *
 * Make a program that filters a list of strings and returns a list with only your friends name in it.
 *
 * If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be
 * sure he's not...
 *
 * Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
 *
 * i.e.
 *
 * friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
 *
 * Note: keep the original order of the names in the output.
 */

function friend(friends){
    //your code here
    return friends.filter(v => v.length === 4);
}

/**
 * Exercise 33
 *
 * The museum of incredible dull things
 *
 * The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up
 * with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest
 * rating.
 *
 * However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a
 * program that tells her the ratings of the items after one removed the lowest one. Fair enough.
 * Task
 *
 * Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are
 * multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an
 * empty array/list.
 *
 * Don't change the order of the elements that are left.
 * Examples
 *
 * * Input: [1,2,3,4,5], output= [2,3,4,5]
 * * Input: [5,3,2,1,4], output = [5,3,2,4]
 * * Input: [2,2,1,2,1], output = [2,2,2,1]
 */

function removeSmallest(numbers) {
    let result = [...numbers];
    result.splice(numbers.indexOf(Math.min(...numbers)), 1);
    return result;
}

/**
 * Exercise 34
 *
 * Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that
 * receive a list of integers as input, and return the largest and lowest number in that list, respectively.
 * Examples (Input -> Output)
 *
 * * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
 * * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
 * * [42, 54, 65, 87, 0]             -> min = 0, max = 87
 * * [5]                             -> min = 5, max = 5
 *
 * Notes
 *
 *     You may consider that there will not be any empty arrays/vectors.
 */

var min = function(list){

    return Math.min(...list);
}

var max = function(list){

    return Math.max(...list);
}

/**
 * Exercise 35
 *
 * Write a function which calculates the average of the numbers in a given list.
 *
 * Note: Empty arrays should return 0.
 */

function find_average(array) {
    // your code here
    return array.length > 0 ? array.reduce((total, value) => total + value, 0) / array.length : 0 ;
}

/**
 * Exercise 36
 *
 * Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
 *
 * For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
 *
 * Note: The function accepts an integer and returns an integer
 */

function squareDigits(num){
    return Number(String(num).split('').map(v => v * v).join(''));
}

/**
 * Exercise 36
 *
 * Story
 *
 * Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give
 * him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the
 * lowest possible price and sell it at the highest.
 * Task
 *
 * Write a function that returns both the minimum and maximum number of the given list/array.
 * Examples (Input --> Output)
 *
 * [1,2,3,4,5] --> [1,5]
 * [2334454,5] --> [5,2334454]
 * [1]         --> [1,1]
 *
 * Remarks
 *
 * All arrays or lists will always have at least one element, so you don't need to check the length. Also, your
 * function will always get an array or a list, you don't have to check for null, undefined or similar.
 */

function minMax(arr){
    return [Math.min(...arr),Math.max(...arr)]; // fix me!
}

/**
 * Exercise 37
 *
 * Write function bmi that calculates body mass index (bmi = weight / height2).
 *
 * if bmi <= 18.5 return "Underweight"
 *
 * if bmi <= 25.0 return "Normal"
 *
 * if bmi <= 30.0 return "Overweight"
 *
 * if bmi > 30 return "Obese"
 */

function bmi(weight, height) {
    let bmi = weight / (height * height);

    if(bmi <= 18.5){
        return "Underweight";
    }else if(bmi <= 25.0){
        return "Normal";
    }else if(bmi <= 30.0){
        return "Overweight";
    }else{
        return "Obese";
    }
}

/**
 * Exercise 38
 *
 * Count the number of Duplicates
 *
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits
 * that occur more than once in the input string. The input string can be assumed to contain only alphabets
 * (both uppercase and lowercase) and numeric digits.
 * Example
 *
 * "abcde" -> 0 # no characters repeats more than once
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
 */

function duplicateCount(text){
    //...
    let count = 0;
    let checked = "";

    for(let i=0; i < text.length; i++){
        let num = 0;
        for(let j=i+1; j < text.length; j++){
            if(text[i].toLowerCase() === text[j].toLowerCase()){
                num++;
            }
        }
        if(num > 0 && !checked.includes(text[i].toLowerCase())){
            count++;
            checked += text[i].toLowerCase();
        }
    }
    return count;
}

/**
 * Exercise 39
 *
 * Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
 * If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in
 * love.
 *
 * Write a function that will take the number of petals of each flower and return true if they are in love and false
 * if they aren't.
 */

function lovefunc(flower1, flower2){
    // moment of truth
    return (flower1 % 2 == 0 && flower2 % 2 != 0) || ( flower2 % 2 == 0 && flower1 % 2 != 0 )
}

/**
 * Exercise 40
 *
 * Task:
 *
 * Given a list of integers, determine whether the sum of its elements is odd or even.
 *
 * Give your answer as a string matching "odd" or "even".
 *
 * If the input array is empty consider it as: [0] (array with a zero).
 * Examples:
 *
 * Input: [0]
 * Output: "even"
 *
 * Input: [0, 1, 4]
 * Output: "odd"
 *
 * Input: [0, -1, -5]
 * Output: "even"
 *
 * Have fun!
 */

function oddOrEven(array) {
    //enter code here
    return array.reduce((total, val) => total + val,0) % 2 == 0 ? "even" : "odd";
}

/**
 * Exercise 41
 *
 * Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the
 * string should be retained.
 * Examples
 *
 * "This is an example!" ==> "sihT si na !elpmaxe"
 * "double  spaces"      ==> "elbuod  secaps"
 */

function reverseWords(str) {
    // Go for it
    return str.split(' ').map(v => v.split('').reverse().join('')).join(' ');
}

/**
 * Exercise 42
 *
 * Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the
 * "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears).
 * "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 * Examples
 * Valid arrays
 *
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
 *
 * comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144,
 * 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms
 * of squares:
 *
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
 *
 * Invalid arrays
 *
 * If, for example, we change the first number to something else, comp is not returning true anymore:
 *
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
 *
 * comp(a,b) returns false because in b 132 is not the square of any number of a.
 *
 * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
 *
 * comp(a,b) returns false because in b 36100 is not the square of any number of a.
 * Remarks
 *
 *     a or b might be [] or {} (all languages except R, Shell).
 *     a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#,
 *     Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
 *
 * If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
 * Note for C
 *
 * The two arrays have the same size (> 0) given as parameter in function comp.
 */

function comp(array1, array2){
    //your code here
    if(array1 == null || array2 == null) return false;

    array1.sort((a, b) => a-b);
    array2.sort((a, b) => a-b);

    for(let i=0; i < array1.length; i++){
        if(array1[i] * array1[i] != array2[i]) return false;
    }
    return true;
}

/**
 * Exercise 43
 *
 * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
 * which is the number of times you must multiply the digits in num until you reach a single digit.
 *
 * For example (Input --> Output):
 *
 * 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
 * 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
 * 4 --> 0 (because 4 is already a one-digit number)
 */

function persistence(num) {
    //code me
    let count = 0;
    let result = String(num).split('');

    while(result.length != 1){
        let sum = result[0];
        for(let i=1; i < result.length; i++){
            sum *= result[i];
        }
        count++;
        result = String(sum).split('');
    }

    return count;
}