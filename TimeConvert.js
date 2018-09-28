function TimeConvert(num) {
  var hours = Math.floor(num/60);
  var min = (num%60);
  num = hours+":"+min;
  // code goes here
  return num;

}

function TimeConvert(num) {
  return Math.floor(num/60) + ":" + (num%60);         
}
