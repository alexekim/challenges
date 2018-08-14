"dog!@#$%^&&*()(_+=-\][{}|;':\",./<>?".replace(/[^0-9a-z]/gi, '');

function LongestWord(sen){
  var arrayedSen = sen.split(" ");
  var x = [];
  for (var i = 0; i < arrayedSen.length; i++) {
    var noChar = arrayedSen[i].replace(/[^0-9a-z]/gi, '');
    var length = noChar.length;
    x.push([length, noChar]);
  }
  x = x.sort();
  console.log(x);
  var sen = x[x.length-1][1];
  return sen;
}

function LongestWord(sen) {

  // we use the regex match function which searches the string for the
  // pattern and returns an array of strings it finds
  // in our case the pattern we define below returns words with
  // only the characters a through z and 0 through 9, stripping away punctuation
  // e.g. "hello$% ##all" becomes [hello, all]
  var arr = sen.match(/[a-z0-9]+/gi);

  // the array sort function takes a function as a parameter
  // which is used to compare each element in the array to the
  // next element in the array
  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  // this array now contains all the words in the original
  // string but in order from longest to shortest length
  // so we simply return the first element
  return sorted[0];

}

LongestWord("the $$$longest# word is coderbyte");


function FirstFactorial (num){
  var numbers = [];
  var x = 1;
  for (var i = 1; i < num+1; i++) {
    numbers.push(i);
  }
  console.log(numbers)
  for (var i = 0; i < numbers.length; i++) {
    x = numbers[i]*x;
  }
  console.log(x);
}


function LetterChanges(str){
  var one = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
  var two = ['b','c','d','E','f','g','h','I','j','k','l','m','n','O','p','q','r','s','t','U','v','w','x','y','z','A','0','1','2','3','4','5','6','7','8','9'];
  str = str.split("");
  for (var i = 0; i < str.length; i++) {
    var orig = str[i];
    if (/[^a-zA-Z0-9]/.test(str[i])) {
      str[i] = str[i];
      // console.log( orig  + "=> " +str[i]);
    } else {
      str[i] = two[one.indexOf(str[i])];
      // console.log( orig  + "=> " + str[i]);
    }
  }
  str = str.join("");
  // console.log(str);
  return str;
}

function SimpleAdding(num) {
  var x = 0;
  for (var i = 0; i <= num; i++) {
    x = x+i;
  }

  return (x);
}



function LetterCapitalize(str) {
   var strArray = str.split(" "); // ["i", "ran", "there"]
   var emptyArray = [];
   for (var i = 0; i < strArray.length; i++) {
    var capitalizedWord = strArray[i].substring(0,1).toUpperCase() + strArray[i].substring(1, strArray[i].length);
    emptyArray.push(capitalizedWord);
   }
   var newString = emptyArray.join(" ");
   return newString;
}

function CheckNums(num1,num2) {
  if (num2 > num1){
    return "true";
  } else if(num2< num1){
    return "false"
  } else {
    return "-1";
  }
  // code goes here
}


function TimeConvert(num){
  var minutes = num%60;
  var hours = parseInt(num/60);

  return hours+ ":"+minutes;
}

function AlphabetSoup(str) {
  var arrayed = str.split("");
  var empty = [];
  for (var i = 0; i < arrayed.length; i++) {
    empty.push(arrayed[i]);
  }
  empty = empty.sort().join("");
  return empty;
}
function AlphabetSoup(str) {
  return str.split("").sort().join("");
}



var subtraction = function(number){
  var stringedNumber = number.toString();
  if (stringedNumber.length ===3) {
    number = number.toString()+"0"
    console.log("rearranged: "+number);
  }

  var higher = (number).toString().split("").sort(function(a,b){return(b-a)}).join("");
  var lower = (number).toString().split("").sort().join("");
  console.log(higher + "-" + lower);
  var result = higher-lower;
  var stringResult = result.toString(); //turns result number into string

  console.log("2: "+ stringResult);
  if(stringResult.length == 3){
    var newString = result.toString()+"0";
    newString = parseInt(newString); // return it to number ex. 999
    console.log("3: added 0: "+newString);
    return newString;
  } else if (stringResult.length == 4){
    var newString = result;
    return newString;
  }

  // return result;
};
function KaprekarsConstant(num) {
  var times = 0;
  var filler = num;
  console.log("1: "+filler);
  // subtraction(filler);
  if(subtraction(filler)== 6174 ){
      console.log("done");
      times =times +1;
      return times;
  } else if(subtraction(filler) != 6174){
    // console.log("subtraction called");
    times = times+1;
    console.log("filler: " + filler);
    console.log("4: result is " + subtraction(filler));
    subtraction(filler);
    console.log("times: "+times);
  }
}

















//
