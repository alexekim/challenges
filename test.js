var origItems = ["rice", "sugar", "wheat", "cheese"];
var origPrice = [16.89,56.92,20.89,345.99];
var inputItems = ["rice", "cheese"];
var inputPrice = [18.99, 400.89];

function verifyItems(origItems, origPrices, items, prices) {
  var times = 0;
  for (var i = 0; i < items.length; i++) {
    if(origItems.indexOf(items[i]) != -1){
      var indexOfOrigItem = origItems.indexOf(items[i]);
      if(prices[i] != origPrices[indexOfOrigItem]){
        times = times+1;
      }
    }
  }
  return (times);
}

verifyItems(origItems, origPrice, inputItems, inputPrice);
//RRETURNS INTEGER NUMBER OF TIMES HE PUT IN INCORRECT PRICE
