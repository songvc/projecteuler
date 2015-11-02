function getPrimeFactor(n){
	var primeFactor = {};

	for (var i = 2; i <= n; i++){
		if (n % i == 0){
			while (n % i == 0){
				primeFactor[i] = primeFactor[i]||0;
				primeFactor[i]++;
				n = n / i ;
			}
		}
	}
	return primeFactor;
}

function smallestMultiple(){
	var smallest = 1,
		primeFactors = [],
		count = {};

	// factorize each numbers between 2 to 20 (excludes 1 since 1 is not a prime)
	for (var i = 2; i <= 20; i++ ){
		primeFactors.push(getPrimeFactor(i));
	}

	// find prime factors with highest exponents and store in count object
	for (var i = 0; i < primeFactors.length; i++){

		for (var j in primeFactors[i]){

			if (count[j]){
				if (primeFactors[i][j] >= count[j]){
					count[j] = primeFactors[i][j];
				}

			}else{
				count[j] = primeFactors[i][j]; 
			}

		}

	}

	// multiply 
	for(var j in count){
		smallest *= Math.pow(j, count[j]);
	}

	return smallest;
}

console.log(smallestMultiple());
