function fib(n){

	if (n == 1){
		return 1;
	}else if (n == 2){
		return 2;
	}else{
		return fib(n-2) + fib(n-1);
	}

}

function findEvenSums(limit){
	var n = 1,
		sum = [];
	
	while (fib(n) < limit){
		if (fib(n)%2==0){
			sum.push(fib(n));
		}
		n++;
	}

	return sum.reduce(function(a,b){
		return a+b;
	})

}

console.log(fib(5));
console.log(fib(6));
console.log(findEvenSums(4000000));