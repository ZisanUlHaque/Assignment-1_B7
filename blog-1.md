# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

In TypeScript, **Generics** are the elegant solution, allowing us to create "type variables" that act as placeholders until the code is actually used.

## 1. From Specific to Dynamic Arrays
Instead of defining arrays for every specific data type, we can create a `GenericArray<T>`. This allows a single definition to handle strings, numbers, or even complex objects seamlessly without losing type intelligence.

**Example 1:**
```
type GenericArray<T> = Array<T>;

// Handling strings
const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

// Handling numbers
const rollNumbers: GenericArray<number> = [4, 7, 11];

// Handling complex objects
type User = { name: string; age: number };
const userList: GenericArray<User> = [
  { name: "Mr. X", age: 22 },
  { name: "Mr. Y", age: 25 },
];
```

## 2. Multi-Type Generics (Tuples)
Generics aren't limited to a single type placeholder. You can use multiple placeholders (like `X` and `Y`) to create flexible structures like coordinates or heterogeneous tuples where each element can be a different type.

**Example 2:**
```
type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2];

const res = createArrayTupleWithGeneric(222, { name: "Zisan" });

```

## 3. Maintaining Type Integrity in Functions
The real magic happens in functions. When we pass an object into a generic function, TypeScript "tracks" the specific properties of that object. This ensures that when we return the data, we don't lose visibility of the original properties.

**Example 3:**
```
const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student2 = {
  id: 321,
  name: "Zisan",
  hasCar: true,
};

const result = addStudentToCourse(student2); 

```

###Conclusion
By using Generics, we keep our code **DRY** while ensuring that our functions remain predictable and strictly typed. .</T>