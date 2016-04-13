function getDivisorsSum(n){
  var sum = 0;

  for (var i = 1; i <= n/2; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }

  return sum;
}

function getPairs(n){
  var sum = 0;

  for(var i = 1; i < n; i++) {
    if (getDivisorsSum(getDivisorsSum(i)) == i && getDivisorsSum(i) != i){
      sum += getDivisorsSum(i);
      sum += i;
    }
  }
  return sum/2;
}

console.log(getPairs(10000));
// console.log(getPairs(10000));
