// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a,b){
    if (a>b){
      return a;
    }
      else {
        return b;
      }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree (a, b, c) {
  if (a > b && a > c) {
    return a
  } else if (b > a && b > c) {
    return b
  } else {
    return c
  }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel (char) {
  char = char.toLowerCase()
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true
  } else {
    return false
  }
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase) {
    var word = "";
    phrase = phrase.toLowerCase();
    for (i=0; i<phrase.length; i++) {
      if (phrase[i] != "a" && phrase[i] != "e" && phrase[i] != "i" && phrase[i] != "o" && phrase[i] != "u" && phrase[i] != " " ) {
        word += phrase[i] + "o" + phrase[i];
      } else {
        word += phrase[i];
      }
    }
    console.log(word);//to see whats happenening.
    return word;//gives actual result.
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    var word = "";
    for (i=1; i<=phrase.length; i++) {
      something = phrase.length - i;
      word += phrase[something];

    }
    console.log(word);
    return word;
}
