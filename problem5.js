function findPrimeFactor(n){
	var primeFactor = [];

	for (var i = 2; i <= n; i++){
		if (n % i == 0){
			while (n % i == 0){
				primeFactor.push(i);
				n = n / i ;
			}
		}
	}
	return primeFactor;
}

function smallestMultiple(n){

}