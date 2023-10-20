/********************************  1  **************************************/

let num = 100;

for (let i = 0; i < num; i++) {
  console.log(i);
}

let i = 0;

while (i < num) {
    console.log(i);
    i++;
}

/********************************  2  **************************************/

const arr = [2, 4, 6, 8, 10];
const emptyArr = [];

for (let i = 0; i < arr.length; i++) {
    const result = arr[i] + 3;
    emptyArr.push(result);
}

console.log(emptyArr);

/********************************  3  **************************************/

const numArr = [-1, -70, -2, -3, -60, -5, -50];

let result = numArr[0];

for (let i = 1; i < numArr.length; i++) {
    if(numArr[i] > result) {
        result = numArr[i];
    }
}

console.log(result);


/********************************  4  **************************************/

// 1st solution

const numbers = [1, 2, 3, 4, 5, 6];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// 2nd solution

// console.log(numbers.reduce((prev, curr) => prev + curr));

/********************************  5  **************************************/

function strInArr(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > result.length) {
      result = arr[i];
    }
  }

  return result;
}

const fruitsArr = ["apple", "banana", "cherry", "date"];

console.log(strInArr(fruitsArr));

/********************************  6  **************************************/

const students = [
  {
    name: "Alice",
    grade: 90,
  },

  {
    name: "Bob",
    grade: 85,
  },

  {
    name: "Charlie",
    grade: 92,
  },
];

let sumOfGrades = 0;

for (let i = 0; i < students.length; i++) {
    sumOfGrades += students[i].grade;
}

console.log(sumOfGrades / students.length);

