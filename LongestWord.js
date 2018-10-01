// function LongestWord(sen) {
//   var splitUp = sen.split(" "); // ["fun&!!", "time"]
//   var x = [];
//   for (var i = 0; i < splitUp.length; i++) {
//     var redone = splitUp[i].replace(/[^a-zA-Z0-9]/gi, '');
//     var len = redone.length
//     x.push([len, redone]);
//   }
//   console.log(x);
//   x = x.sort();
//   var result = x[x.length-1][1];
//   return result;
// }

function LongestWord(sen){
  // remove any non alphabet characters
  // identify the longest words
  // if there are multiple of the same length, return the first one.
  var splitUp = sen.split(" ");
  var splitUpClean = [];
  for (var i = 0; i < splitUp.length; i++) {
    var clean = splitUp[i].replace(/[^a-zA-Z0-9]/gi, '');
    splitUpClean.push([clean.length, clean, i]);
  }
  splitUpClean = splitUpClean.sort();

  var lengthOfLongest = splitUpClean[splitUpClean.length-1][0];
  var longestOnes = [];
  for (var i = 0; i < splitUpClean.length; i++) {
    if (splitUpClean[i][0] == lengthOfLongest ) {
      longestOnes.push(splitUpClean[i]);
    }
  }
  longestOnes = longestOnes.sort(function(a,b){return a[2]-b[2]});
  return (longestOnes[0][1]);
}
