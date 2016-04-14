// total number of permutations 10!
// each tree has 10!/10 items aka 362,880
// so, 1,000,000th permutation, tree starts with 2


// genereate all permutations in an array
// find 1000000th numbers

var permArr = [], usedChars = [];

function permute(input) {
  var i, ch;

  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};

console.log(permute([0,1,2,3,4,5,6,7,8,9])[999999]);
