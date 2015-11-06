function latticePaths(row, col){
	// if 2 x 2 -> 4 chooses 2 
	// if 3 x 3 -> 6 chooses 3 
	var denominator = 1,
		numerator = 1;

	for (var i = 1; i <= row + col; i++){
		denominator *= i;
	}
	for (var j = 1; j <= row; j++){
		numerator *= j;
	}
	return denominator/(numerator*numerator);
}

console.log(latticePaths(20,20));