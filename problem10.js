function findPrimes(limit){
	var sequence=[];
	
	//Using Sieve of Eratosthenes Algorithms

	//create list of sequences up to limit
	for (var i = 2; i < limit; i++){
		sequence.push(i);
	}


	//find indexes of prime multiples and remove them
	for (var i = 0; i < Math.sqrt(limit); i++){
		console.log(sequence.length);
		for (var j = 2; j < limit/sequence[i]; j++){
			console.log(sequence[i] + " " +j + " " + sequence[i]*j);
			if(sequence.indexOf(sequence[i]*j)>1){
				sequence.splice(sequence.indexOf(sequence[i]*j),1);
			}
		}
	}		

	return sequence.reduce(function(a,b){ 
		return a+b;
	});
}

console.log(findPrimes(2000000));