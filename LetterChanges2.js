function LetterChanges(str){
  var ref = {
    "a": "b",
    "b": "c",
    "c": "d",
    "d": "E",
    "e": "f",
    "f": "g",
    "g": "h",
    "h": "I",
    "i": "j",
    "j": "k",
    "k": "l",
    "l": "m",
    "m": "n",
    "n": "O",
    "o": "p",
    "p": "q",
    "q": "r",
    "r": "s",
    "s": "t",
    "t": "U",
    "u": "v",
    "v": "w",
    "w": "x",
    "x": "y",
    "z": "z",
    "z": "A",
    " ": " "
  }
  var strSplit = str.split("");
  var redone = [];
  for (var i = 0; i < strSplit.length; i++) {
    strSplit[i] = strSplit[i].toLowerCase();
    if( ref[strSplit[i]] ){
      redone.push(ref[strSplit[i]]);
    } else {
      redone.push(strSplit[i]);
      // console.log(strSplit[i]);
    }
  }
  return redone.join("");
}
