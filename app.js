const arr1 = [1,2,3];
let arr6 = _.map(arr1, function(item) { return item * 3 });
console.log(arr6);

const arr2 = [2,3,4,5,6,7];

let arr7 = _.filter(arr2, function(item){ return item % 2 === 0 });
console.log("original arr: ",arr2, " even elements: ",arr7);

