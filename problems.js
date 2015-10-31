function findMultiples(n){
	var isMultiples = [];

	for (var i = 1; i < n; i++){
		if (i%3==0 || i%5==0){
			isMultiples.push(i);
		}
	}

	return isMultiples.reduce(function(a,b){
		return a+b;
	});

}


console.log(findMultiples(10));
console.log(findMultiples(1000));