// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6]
var strings = ['this','is','a','collection','of','words']
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
]



// ---------------------------
// 1. Find largest number
// ---------------------------
function largestNumber () {
  var largestvalue = 0
  for (i=0; i<numbers.length; i++){
    console.log("i is: ", i, numbers[i] > numbers[i + 1 ]);
    if (numbers[i] > numbers[i + 1 ] && numbers[i] > largestvalue){
      largestvalue = numbers[i]
    } else if (numbers[i] > largestvalue) {
      console.log(numbers[i])
      largestvalue = numbers[i];
    }
  }
  // console.log(largestvalue);
  return largestvalue;
}



// ---------------------------
// 2. Find longest string
// ---------------------------
function longestString () {
  var longestnumber = 0;
  var longestword = "";
  for (i=0; i<strings.length; i++) {
    if (strings[i].length > longestnumber) {
      longestnumber = strings[i].length;
      longestword = strings[i];
      console.log("Word is: ", i, strings[i])
      console.log("Longest Word is: ", strings[i])
    }
  }
  return longestword;
}

// ---------------------------
// 3. Find even numbers
// ---------------------------
function evenNumbers() {
  var even = [];
  for (i=0; i<numbers.length; i++) {
     if (numbers[i] % 2 === 0) {
       even.push(numbers[i]);
     }
  }
  return even
}


// ---------------------------
// 4. Find odd numbers
// ---------------------------
function oddNumber() {
  var odd = [];
  for (i=0; i<numbers.length; i++) {
    if (numbers[i] % 2 ===1) {
      odd.push(numbers[i]);
    }
  }
  return odd;
}

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
function containsIs() {
  var word = [];
  for (i=0; i<strings.length; i++) {
    for (k=0 ; k<strings[i].length; k++) {
      var wordInAWord = strings[i];
      if (wordInAWord[k] === "i" && wordInAWord[k + 1] === "s") { // shorter way by IF possible putting the conditions together.
        // if (wordInAWord[k + 1] === "s") {// long way of making another if.
          word.push(wordInAWord);
        // }
      }
    }
  }
  return word;
}


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
function together() {
  var newArray = [];
  for (i=0; i<numbers.length; i++) {
    newArray.push(numbers[i])
  }
  for (i=0; i<strings.length; i++) {
    newArray.push(strings[i])
  }
  return newArray
}



// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
function teachJava() {
  var word = [];
  var ordered = [];
  for (i=0; i<instructors.length; i++) {
    if (instructors[i].teaches.toLowerCase() === "javascript") {
      word.push(instructors[i].firstname.toLowerCase())
    }
  }
  word.sort();
  return word;
}
