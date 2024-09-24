let fruits = ['apple', 'banana', 'mango', 'orange'];
fruits.splice(1, 2, 'grape', 'pineapple');
console.log(fruits); // ['apple', 'grape', 'pineapple', 'orange']

// Explanation: Start at index 1, remove 2 elements, and insert 'grape' and 'pineapple'
