function add(...nums) {
  return nums.reduce((acc, num) => acc + num);
}

console.log(add(5, 4, 7, 8, 9));
