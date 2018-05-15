export {};

// type assertion
const year: any = 'This came from a server';
console.log((year as string).length)

// type inference
const message = 'This is a very important message';
// console.log(message / 2);

// type compatibility
interface Person {
    name: string;
}

let tim: Person;
let fullTimothyData = { name: "Timothy", father: "Agnislav" };
tim = fullTimothyData;
