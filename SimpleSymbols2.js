function SimpleSymbols(str) {
  str = str.split("");
  let goods = 0;
  for (var i = 0; i < str.length; i++) {
    if( /[a-z]/i.test(str[i]) ){
      if (str[i-1]=="+" && str[i+1]=="+"  ) {
        // this is good, move on
      }
      else{
        return false;
      }
    } else {
      // move on
    }
  }

  return true;
}
