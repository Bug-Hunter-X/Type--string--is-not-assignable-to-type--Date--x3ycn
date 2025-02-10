function greet(person: string, date: Date): string {
  console.log(person, date);
  return `Hello, ${person}! Today is ${date.toDateString()}`;
}

let message = greet('John Doe', new Date());
console.log(message); 

//Alternative solution if you need to handle potential errors:

function greet2(person: string, dateString: string): string {
  let date:Date;
  try{
    date = new Date(dateString);
  } catch(error) {
    date = new Date();
    console.error("Invalid date string", error);
  }
  return `Hello, ${person}! Today is ${date.toDateString()}`;
}
let message2 = greet2('John Doe', '2024-03-10');
console.log(message2);
let message3 = greet2('John Doe', 'invalid date');
console.log(message3); 