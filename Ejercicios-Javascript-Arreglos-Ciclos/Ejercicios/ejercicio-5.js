// Exercise #5
//For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
// 1.	Write a command that prints out all of the people in the list.
console.log(people);
// 2.	Write the command to remove "Dani" from the array.
people.splice(people.indexOf("Dani"), 1);
// 3.	Write the command to remove "Juan" from the array.
people.splice(people.indexOf("Juan"), 1);
// 4.	Write the command to move "Luis" to the front of the array.
let luis = people.splice(people.indexOf("Luis"), 1)[0];
people.unshift(luis);
// 5.	Write the command to add your name to the end of the array.
people.push("Mauricio");
// 6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  }
}
// 7.	Write the command that gives the indexOf where "Maria" is located.
console.log(people.indexOf("Maria"));
// At the end of the exercise, there should be 4 people in the array.
console.log("Final:", people);
