const LetterCapitalize = str => {
  str = str.split("");
  for (var i = 0; i < str.length; i++) {
    if(str[i-1] == " " || str[i-1] == null){
      str[i] = str[i].toUpperCase();
    }
  }
  return str.join("");
}
