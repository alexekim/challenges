function LongestWord(sen) {
  var splitUp = sen.split(" "); // ["fun&!!", "time"]
  var x = [];
  for (var i = 0; i < splitUp.length; i++) {
    var redone = splitUp[i].replace(/[^a-zA-Z0-9]/gi, '');
    var len = redone.length
    x.push([len, redone]);
  }
  console.log(x);
  x = x.sort();
  var result = x[x.length-1][1];
  return result;
}
