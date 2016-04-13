function findFactorial(x) {
  if (x == 0) {
    return 1;
  }else if (x == 1) {
    return 1;
  }else {
    return findFactorial(x-1) * x;
  }
}

function findDigitSum(y){
  var stringDigit = findFactorial(y)+"";
  var sum = 0;

  for (var i = 0; i< stringDigit.length; i++) {
    sum += parseInt(stringDigit[i]);
  }
  return sum;
}

console.log(findFactorial(30));
// console.log(findDigitSum(100));
