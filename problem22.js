var fs = require("fs");

fs.readFile("./p022_names.txt", "utf8", function(err, text) {
  if (err) throw err;

  var array = text.toString().split(",").sort();
  var nameScore = 0;
  var localSum = 0;

  //sanitize/remove quote marks
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].substring(1,array[i].length-1);
  }

  for (var i = 0; i < array.length; i++) {
    localSum = 0;
    for (var j = 0; j < array[i].length; j++) {
      localSum += array[i].charCodeAt(j)-64;
    }
    nameScore += localSum * (array.indexOf(array[i])+1);
  }
  console.log(nameScore);

})
