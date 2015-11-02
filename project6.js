function sumSquareDifference(n){
	var sum1 = 0,
		sum2 = 0,
		sum2_squared = 0;

	for (var i = 1; i <= n; i++){
		sum1 += Math.pow(i,2);
	}

	for (var i = 1; i <=n; i++){
		sum2 += i;
		sum2_squared = Math.pow(sum2,2);
	}

	console.log(sum1);
	console.log(sum2_squared);

	return sum2_squared - sum1;
}

console.log(sumSquareDifference(10));
console.log(sumSquareDifference(100));