///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
function sum(a,b){
  var sum1 = a + b;
  console.log(sum1);
  return sum1;
}
//below is a shorter way to return
// function sum(a,b){
//   return a+b;
// }



// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
function avg(a,b,c){
  return (a+b+c)/3;
}



// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
function getLength(a){
  return a.length;
}



// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.
function greaterThan(a,b){
  return a<b;
}



// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
function greet(a){
  return "hello, " + a + "!";
}



// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
function madlib(a,b,c,d,e){
  // return "The " + a + " teacher is " + b + " because he love to " + c + " " + d + " when at " + e + ".";
  return `The ${a} teacher is ${b} because she loves to ${c} ${d} when at ${e}`;
  // template literal (which is above (the${})) is MUCH easier for making complex strings or commands.
}



///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
