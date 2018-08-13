var example = [1, 1, 0, -1, -1]

function plusMinus(arr) {
  var pos = 0;
  var neg = 0;
  var zer = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos = pos + 1;
    } else if (arr[i] < 0) {
      neg = neg + 1;
    } else {
      zer = zer + 1;
    }
  }
  console.log((pos / arr.length).toFixed(6));
  console.log((neg / arr.length).toFixed(6));
  console.log((zer / arr.length).toFixed(6))

}

var example = [11, 2, 4, 4, 5, 6, 10, 8, -12];


var staircase = function(n) {
  var stairs = "";
  for (var i = 0; i <= n; i++) {
    if (i != n) {
      stairs = stairs + " ".repeat(n - i) + "#".repeat(i) + "\n";
    } else {
      stairs = stairs + " ".repeat(n - i) + "#".repeat(i);
    }
  }
  console.log(stairs);
}



function miniMaxSum(arr) {
  arr.sort();
  var min = 0;
  var max = 0;
  for (var i = 0; i < 4; i++) {
    min = min + arr[i];
  }
  for (var i = 1; i < 5; i++) {
    max = max + arr[i];
  }
  console.log(min + " " + max);
  // console.log(max)
}



var cancles = [3, 2, 3, 3, 3];

function birthdayCakeCandles(ar) {
  var empty = [];
  ar.sort(function(a, b) {
    return b - a;
  });
  var first = ar[0];
  // console.log("first: " + first);
  for (var i = 0; i < ar.length; i++) {
    // console.log(ar[i]);
    if (ar[i] == first) {
      empty.push(ar[i]);
    }
  }
  return empty.length;
}

birthdayCakeCandles(cancles);



var time = "12:05:45PM";

function timeConversion(s) {
  s.split("");
  var hour = s[0] + s[1];
  var min = s[3] + s[4];
  var sec = s[6] + s[7];
  var day = s[8] + s[9];

  if (day == "PM" && hour != "12") {
    var newHour = parseInt(hour) + 12;
    return newHour + ":" + min + ":" + sec;
  } else if (day == "PM" && hour == "12") {
    return hour + ":" + min + ":" + sec;
  } else if (day == "AM" && hour == "12") {
    return "00" + ":" + min + ":" + sec;
  } else if (day == "AM" && hour != "12") {
    return hour + ":" + min + ":" + sec;
  }

}
timeConversion(time);


var gradesEx = [4, 73, 67, 38, 33];

function gradingStudents(grades) {
  var revisedGrades = [];
  for (var i = 0; i < grades.length; i++) {
    if (grades[i] <= 40) {
      revisedGrades.push(grades[i]);
    } else {
      switch (parseInt(grades[i].toString().split("")[1])) {
        var x = function(e) {
          switch (e) {
            case 1:
              revisedGrades.push(parseInt(grades[i].toString().split("")[0] + 0));
              break;
            case 2:
            revisedGrades.push(parseInt(grades[i].toString().split("")[0] + 0));
              break;
            case 3:
            revisedGrades.push(parseInt(grades[i].toString().split("")[0] + 0));
              break;
            case 4:
            revisedGrades.push(parseInt(grades[i].toString().split("")[0] + 0));
              break;
            case 6:
              console.log(1);
              break;
            case 7:
              console.log(2);
              break;
            case 8:
              console.log(3);
              break;
            case 9:
              console.log(4);
              break;
            case 0:
              console.log("0 stay");
              break;
            case 5:
              console.log("5 stay");
              break;
            default:
              console.log("nan?");

          }
        }
      }

    }
  }
}
return revisedGrades;
}
gradingStudents(gradesEx);



var x = function(e) {
  switch (e) {
    case 1:
      console.log(1);
      break;
    case 2:
      console.log(2);
      break;
    case 3:
      console.log(3);
      break;
    case 4:
      console.log(4);
      break;
    case 6:
      console.log(1);
      break;
    case 7:
      console.log(2);
      break;
    case 8:
      console.log(3);
      break;
    case 9:
      console.log(4);
      break;
    case 0:
      console.log("0 stay");
      break;
    case 5:
      console.log("5 stay");
      break;
    default:
      console.log("nan?");

  }
}
