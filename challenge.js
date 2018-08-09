var x = [1,12,3,4,4,46,67,889,98,5656,3,25,8];

var findNumber = function(array, k){
  var yesArray = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i] == k){
      console.log("value of k was found");
      yesArray.push(array[i]);
    } else {
      console.log("item was not k");
    }
  }
  if (yesArray.indexOf(k) != -1) {
    return "YES";
  } else{
    return "NO"
  }
}



function oddNumbers(l, r) {
  var empty = [];
  for (var i = l; i < r; i++) {
    if (i%2 != 0) {
      empty.push(i);
    }
  }
  return empty;
}
