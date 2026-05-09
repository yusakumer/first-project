const ojb = [{
  name: "shima",
  age: 23,
}];
console.log(ojb.name);
const age = "80";
const is = age >= 18 ? "成人" : "bubui";
console.log(is);

intNum = parseInt(age);
console.log(intNum);


let num1 = 10;
let num2 = 5;

let isEqual = num1 === num2
console.log(isEqual);

let day = "月";

switch (day) {
    case "月":
        console.log(day);
        break;
    case "火":
        console.log("火曜日");
        break;
    default:
        console.log("終わり");
}


const fruits = ["りんご","みかん","キウイ"]
for (const fruit of fruits){
    console.log(fruit);
}


console.log(ojb.name)

for (let person of ojb) {
    console.log(person.name);
}