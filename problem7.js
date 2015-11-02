function isPrime(n){
	if (n <= 1){
		return false;
	}
	for (var i = 2; i < n; i++){
		if (n%i == 0){
			return false;
			break;
		}
	}
	return true;
}

function findPrime(){
	var primeList = [],
	 	num = 2;

	while(primeList.length < 10001){
		if (isPrime(num)){
			primeList.push(num);
		}
		num++;
	}	
	console.log(primeList);
	return primeList[primeList.length-1];	
}

console.log(findPrime());