"use script";

let arr = ["Mahliyo", "Aziza", "Hilola", "Aziz"];
let randomName = Math.floor(Math.random() * 4 + 1);
let random = "";

function randomName1() {
  if (randomName == 1) {
    random = arr[0];
  } else if (randomName == 2) {
    random = arr[1];
  } else if (randomName == 3) {
    random = arr[2];
  } else if (randomName == 4) {
    random = arr[3];
  }
}
randomName1();
console.log(random);

let a = [1, 5, 8, 96, 23, 45, 78, 2, 56, 8, 7];

a.sort(function (a, b) {
  return a - b;
});

console.log(a);
