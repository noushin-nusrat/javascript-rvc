const numbers = [1, 2, 3, 4, 5, 6, 8];
// console.log(numbers);
// num.reverse() ;
// console.log(numbers);

const rev_num = [];
for(const num of numbers){
    rev_num.unshift(num);
};
console.log(rev_num);
