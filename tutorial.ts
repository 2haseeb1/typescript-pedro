let id:number = 34;


console.log("id", id)

const concatenate = (a: string, b: string):string => {
    return a+b
}
console.log(concatenate("12","5"))

// hello.ts
let message: string = "Hello, World!";
console.log(message);

//How does TypeScript improve upon JavaScript in terms of type safety?


interface Person{
    name: string,
    age:number
}

let personDetails: Person = {
    name: "jphn",
    age:34
}
console.log(personDetails)

interface Shape{
area:()=>string
}
const circle: Shape={
    area:()=>(3.14*5*55).toFixed(2)
}
console.log("area rusult", circle.area())


   function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  console.log(greet("Alice")); 