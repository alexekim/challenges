// function FirstFactorial(num){
//   var empty = [];
//   var answer = 1;
//   for (var i = 1; i <= num; i++) {
//     empty.push(i);
//   }
//   for (var j = 0; j < empty.length; j++) {
//     answer = answer*empty[j];
//   }
//   return answer;
// }

function FirstFactorial(num){
  var empty = [];
  for (var i = 1; i <=num; i++) {
    empty.push(i);
  }
  var answer = 1;
  for (var i = 0; i < empty.length; i++) {
    answer = answer*empty[i];
  }
  return answer;
}
