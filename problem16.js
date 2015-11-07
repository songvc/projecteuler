function power_digit_sum(base,exp){
	var str = Math.pow(base,exp).toString(),
		sum = 0;

	console.log(str);
	for (var i = 0; i < str.length; i++){
		sum += parseInt(str[i]);
	}

	return sum;
}

for (var i =1; i < 100; i++){
	console.log(i + "  " + Math.pow(2,i))
}



