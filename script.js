// var studentFirstName = "Bakyt";
// var studentLastName = "Utanov";
// var studentAge = 20;
// var studentOccupied = false;

// var student = {
//   firstName: "Bakyt",
//   lastName: "Utanov",
//   age: 20,
//   occupied: false,
//   sayHello: function () {
//     console.log("Hello my name is " + this.firstName + " and I'm " + this.age + " years old!");
//   }
// };

// // output
// console.log(student.firstName + " " + student.lastName);

// var dog = {
//   name: "Kumaiyk",
//   age: 2,
// };

// //update
// dog.age = 3;

// //add
// dog.color = "gray";
// // console.log(dog.color);

// //delete
// delete dog.color;

// //Methods
// dog.bark = function () {
//   console.log("Woof, woof, wof!");
// }
// // dog.bark();
// dog.bark();

// student.firstName = "Aijan";
// student.age = 19;
// student.sayHello();


//ARRAYs

var shoppingList1 = "Apple";
var shoppingList2 = "Pear"

var shoppingList = ["Apple", "Pear", "Pineapple", "Cherry"];

console.log(shoppingList [0]);
console.log(shoppingList [1]);
console.log(shoppingList [6]);

// update
shoppingList [2] = "Tomato";
//console.log(shoppingList [2]);

// add to the end
shoppingList.push("Cherry");
// console.log(shoppingList);

// add to the beginning
shoppingList.unshift("Salt");
console.log(shoppingList);


//delete
//remove from the end
shoppingList.pop();

//remove from the start
shoppingList.shift();

//show the list length
console.log(shoppingList.length);

document.write("<ul>");
for (let i=0; i < shoppingList.length; i++) {
  document.write("<li>" + shoppingList[i] + "</li>");
}

document.write("</ul>");


//built in properties and methods
var numberExample1 = 3.14;

