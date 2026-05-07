//Problem 1:

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

//Problem 2:

function reverseString(input: string): string {
  return input.split(" ").reverse().join(" ");
}

//Problem  3:

type StringOrNumber = number | string;

const checkType = (input: StringOrNumber) => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};


//Problem 4:

const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};


//Problem 5:

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = <T extends Book>(book: T) => {
  return {
    ...book,
    isRead: true,
  };
};


//Problem 6:

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age)
    this.grade = grade;
  }

  getDetails(){
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`); 
  }
}


//Problem 7:


function getIntersection(arr1: number[], arr2: number[]): number[] {
  const intersection = arr1.filter(num => arr2.includes(num));

  return [...new Set(intersection)];
}
