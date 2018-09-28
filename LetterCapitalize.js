function LetterCapitalize(str){
  str = str.split(" "); // ["hello", "world"]
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].split(""); // [["h","e","l","l","o"], ["world"]]
    str[i][0] = str[i][0].toUpperCase();  // [["H","e","l","l","o"], ["world"]]
    str[i] = str[i].join(""); //["Hello", "world"]
  }
  return str.join(" "); // "Hello World"
}
