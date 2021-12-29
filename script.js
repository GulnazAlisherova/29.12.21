var studentFirstName = "Bakyt";
var studentLastName = "Utanov";
var studentAge = 20;
var studentOccupied = false;

var student = {
  firstName: "Bakyt",
  lastName: "Utanov",
  age: 20,
  occupied: false,
  sayHello: function () {
    console.log("Hello my name is " + this.firstName + " and I'm " + this.age + " years old!");
  }
};

// output
console.log(student.firstName + " " + student.lastName);

var dog = {
  name: "Kumaiyk",
  age: 2,
};

//update
dog.age = 3;

//add
dog.color = "gray";
// console.log(dog.color);

//delete
delete dog.color;

//Methods
dog.bark = function () {
  console.log("Woof, woof, wof!");
}
// dog.bark();
dog.bark();

student.firstName = "Aijan";
student.age = 19;
student.sayHello();


//ARRAYs

var shoppingList1 = "Apple";
var shoppingList2 = "Pear"

var shoppingList = ["Apple", "Pear", "Pineapple", "Cherry", "Tomato", "Potato" 100, true];

console.log(shoppingList [0]);