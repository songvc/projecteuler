function getDivisorsSum(n){
  var sum = 0;

  for (var i = 0; i < n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }

  return sum;
}

function getPairs(n){
  for(var i = 1; i < n; i++) {
    for(var j = 1; j < n; j++) {

    }
  }
  return sum;
}


console.log(getAll(10000));
