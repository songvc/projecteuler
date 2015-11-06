function findLength(n){
	var term = 1;

	if ( n < 2){
		return term;
	}

	while ( 1 != n ){
		if (n % 2 == 0){
			n = n / 2;
			term++;
		}else{
			n = (n*3) + 1;
			term++;
		}
	}
	return term;
}

function findLongest(limit){
	var chain = [],
		max_chain = 0,
		max_index = 0;

	// for (var i =0; i < limit; i++){
	// 	console.log(i + " " + findLength(i));
	// 	chain.push(findLength(i));
	// }

	for (var i =0; i < limit; i++){
		if(findLength(i)>max_chain){
			max_chain = findLength(i);
			max_index = i;
		}
	}

	return max_index;
}

console.log(findLongest(1000000));