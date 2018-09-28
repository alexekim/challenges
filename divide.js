var divide = function(a,b){
  var count = 0;
  while (a>=b) {
    a = a-b;
    count++
  }
  return count + " r: " +a;
}
