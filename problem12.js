function countDivisible(n){
	var num = 0;

	for(var i = 1; i <= n; i++){
		if (n%i ==0){
			num++;
		}
	}
	return num;
}

function triangle(n){
	var triangle = 0;

	for(var i = 1; i <= n; i++){
		triangle += i;
	}

	return triangle;
}


function findTriangle(limit){
	var x = 1;
	
	while(limit > countDivisible(triangle(x))){
		console.log(x + " " + triangle(x)+ " " +countDivisible(triangle(x)));
		x++
	}

	return triangle(x);
}

console.log(findTriangle(500));