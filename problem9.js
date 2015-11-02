function findTriplet(n){

	for (var c = 1; c < 998; c++){
		for(var b = 1; b < c; b++){
			for(var a = 1; a < b; a++){
				if( a + b == n - c && Math.pow(c,2) == Math.pow(a,2) + Math.pow(b,2)){
					return c*b*a;
				}

			}
		}

	}
}

console.log(findTriplet(1000));