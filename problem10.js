function findPrimes(limit){
	var sequence=[],
	upperbound = Math.sqrt(limit),
		output=[];
	
	//Using Sieve of Eratosthenes Algorithms

	for (var i = 0; i < limit; i++){
		sequence.push(true);
	}

	for (var i = 2; i <= upperbound; i++){
		if(sequence[i]){
			for(var j = 2 * i; j < limit; j+= i){
				sequence[j] = false;
			}
		}
	}

	for (var x = 2; x < limit; x++){
		if(sequence[x]){
			output.push(x);
		}
	}

	console.log(output)

	return output.reduce(function(a,b){ 
		return a+b;
	});
}

// console.log(findPrimes(100));
console.log(findPrimes(2000000));