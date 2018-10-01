function LetterChanges(str) {
    // let one = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    // let two = ["b","c","d","E","f","g","h","I","j","k","l","m","n","O","p","q","r","s","t","U","v","w","x","y","z","A"];
    var reference = {
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
      "y": "z",
      "z": "A"
    }

    let emptyArr = [];
    str = str.toLowerCase();
    str = str.split("");

    for (var i = 0; i < str.length; i++) {
      if (reference[str[i]] ){
        emptyArr.push(reference[str[i]]);
      } else {
        emptyArr.push(str[i]);
      }
    }


    return emptyArr.join("");
  // code goes here
//   return str;

}

// keep this function call here
LetterChanges(readline());
