function SimpleAdding(num){
  var empty = [];
  for (var i = 1; i <= num; i++) {
    empty.push(i);
  }
  var answer = 0;
  for (var i = 0; i < empty.length; i++) {
    answer = answer + empty[i];

  }
  return answer;
}
