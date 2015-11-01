function findLargestPrimeFactor(n){
	var primeFactor = [];

	for (var i = 2; i <= n; i++){
		if (n % i == 0){
			while (n % i == 0){
				primeFactor.push(i);
				n = n / i ;
			}
		}
	}

	console.log(primeFactor);
	console.log(Math.max.apply(null,(primeFactor)));
}


findLargestPrimeFactor(600851475143);