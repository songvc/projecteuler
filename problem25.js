function fib(n){

	if (n == 1){
		return 1;
	}else if (n == 2){
		return 2;
	}else{
		return fib(n-2) + fib(n-1);
	}

}

function countDigits(n) {
  return n.toString().length;
}

function findSequence(n) {
  
}

console.log(findSequence());
