function FirstFactorial(num){
  var empty = [];
  var answer = 1;
  for (var i = 1; i <= num; i++) {
    empty.push(i);
  }
  for (var j = 0; j < empty.length; j++) {
    answer = answer*empty[j];
  }
  return answer;
}
