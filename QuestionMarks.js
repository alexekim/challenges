function QuestionsMarks(str) {
  str = str.split("");
  var numsAndQs = [];
  var onlyNums = [];
  for (var i = 0; i < str.length; i++) {
    if ( /[?0-9]/g.test(str[i]) ){
      numsAndQs.push(str[i]);
    }
    if (/[0-9]/g.test(str[i])) {
      onlyNums.push(str[i]);
    }
  }
  // console.log(numsAndQs);

  var truths = 0;
  var falses = 0;
  var almostTruths = 0;
  for (var i = 0; i < numsAndQs.length; i++) {
    var numberCheck = !isNaN(parseInt(numsAndQs[i]));
    var threeQsCheck = numsAndQs[i+1] + numsAndQs[i+2] + numsAndQs[i+3] == "???";
    var tenCheck = parseInt(numsAndQs[i]) + parseInt(numsAndQs[i+4]) == 10;
    if (numberCheck && threeQsCheck && tenCheck) {
      // console.log("hey!");
      truths++;
    }
    else if(numberCheck && !threeQsCheck && tenCheck){
      almostTruths++
    }
    else {
      falses++;
    }
  }
  if (truths>0 && almostTruths==0 ){
    return true;
  } else{
    return false;
  }
}
