function isPalindrome(n){
	var num = n.toString(),
		len = num.length;
	
	if(len < 4){
		if (num[0] == num[len-1]){
			return true;
		}else{
			return false;
		}
	}else{
		if (num[0] == num[len-1]){
			return true && isPalindrome(num.substring(1,len-1));
		}else{
			return false;
		}		
	}
}

function findLargestPalindrome(){
	var palindromeList = [];

	for(var i = 100; i < 1000; i++){
		for(var j = 100; j <= i; j++){
			if (isPalindrome(i*j)){
				palindromeList.push(i*j);
			}
		}
	}

	console.log(palindromeList);
	console.log(Math.max.apply(null, palindromeList));
	return Math.max.apply(null, palindromeList);
}

findLargestPalindrome();