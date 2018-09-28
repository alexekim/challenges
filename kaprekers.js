function KaprekarsConstant(num) {
  var numLarge = num.split("").sort(function(a,b){
    return a-b;
  });
  var numSmall = num.split("").sort(function(a,b){
    reutrn b-a;
  })
  if (subtract(numLarge,numSmall) == 6174 ) {

  }
  // code goes here
  return num;

}

function subtract(big, small){
  return big-small;
}
