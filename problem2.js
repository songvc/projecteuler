function fib(n){

	if (n == 1){
		return 1;
	}else if (n==2){
		return 2;
	}else{
		return fib(n-2) + fib(n-1);
	}

}

console.log(fib(5));
console.log(fib(6));