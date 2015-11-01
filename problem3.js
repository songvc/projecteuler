function isPrime(n){
	if (n < 2){
		return false;
	}

	for (var i = 2; i < n; i++){
		if(n % i == 0){
			return false;
			break;			
		}
	}
	return true;
}


function findLargestPrimeFactor(n){
	var primeList = [];

	for (var i = 0; i < n; i++){
		if (isPrime(i)){
			primeList.push(i);
		}
	}

	console.log(primeList);
}

findLargestPrimeFactor(600851475143);