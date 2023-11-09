

**Question 1: What are some benefits of using TypeScript over JavaScript in a project?
**Answer: There Are several Benefit using Typescript over Javascript in a Project: 
1. Strongly Typed 
2. Code Readibility
3. Less Bug or Find error easily .
4. Better Coding


**Question 2: What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each
** Answer:
Optional Chaining:  When properties on an object may be deeply nested, maybe undefined, or null, optional chaining is used to safely access properties or invoke methods on the object.it help avoid error when trying to access property of that does may not exist.
Nullish Coalescing (??):  If an expression evaluates to null or undefined, you can provide a default value for it using the nullish coalescing operator (??).
Here Are the Example of Nulling and Optional Chaining: 

Optional Chaining:  
const Person= {
        phone?: string;
        address?: {
            city: string;
            street: string;
        }
    }
    const cityName = person.address?.city;
    console.log(cityName);

Nullish Coalescing: 

    const defaultValue = "Default Value";
    const userInput = null;
    const result = userInput ?? defaultValue;
    console.log(result);

**Question 3: How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.
**Answer: Asynchronous is most common occurrence in Javascript and Typescript. it is use for take time to complete the occurrence.it is use mostly in NodeJs. 
The advantages of using async/await over callbacks or Promises are:
1. Maintainability
2. Error handling
3. Expressiveness

**Question 4: How can you use TypeScript's enums, and what are their advantages?.
**Answer: TypeScript's Enums allow to define set of name Constant.Example: 
enum Person {
 name, 
 age,
 address
}
let IdentifyPerson = Person.name;

Now, The Advantages of Typescript Enum are:
1. Readability
2. Type Safety
3. Self-Documenting
4. Code Organized

**Question 5: Explain the role of type guards in TypeScript and provide an example of a custom type guard.
**Answer: Type Guard is a typescript feature in TypeScript that allows more  more precise type-checking within specific blocks of code. 
Here is The Example of Typescript Code: 
 const problem6 = (params: unknown) => {
        if (Array.isArray(params) && params.every((item) => typeof item === 'number')) {
            let sum = 0;
            params.forEach((item) => (sum += item))
            console.log('sum of number', sum);
        } else {
            console.log('parameter is not an array of number');
        }
    }
**Question 6: Can you give an example of how to use "readonly" properties in TypeScript?
**Answer: 
class User {
  readonly name: string;
  readonly birthYear: number;

  constructor(name: string, birthYear: number) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }
}

const person = new User("Amit", 2001)

**Question 7: Explain what a union type is in TypeScript and provide an example of its usage.
**Answer: In TypeScript, a union type is a type that can be any of a collection of defined types. it is represented using the single or symbol (`|`) to separate the possible types. 
here is the example of Union Type:

  const problem1 = (value: string | number): number | string => {
        if (typeof value === "string") {
            return value.length;
        } else {
            return value * value;
        }
    }
    const stringResult = problem1("amit");
    const numberResult = problem1(5);
