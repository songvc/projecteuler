function getDivisorsSum(n){
  var sum = 0;

  for (var i = 1; i <= n/2; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }

  return sum;
}
