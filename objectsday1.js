const object1={
    name:"jhon",
    age:22,
    gender: "male",
    phone:'9848934567'
}

const keys =Object.keys(object1);
const values =Object.values(object1);

console.log(keys)
console.log(values)
///task-1
//create a object with 5 items in it
const object={
    no:"jhon",
    no1: "harry",
    no2:"summer",
    no3:"winter",
    no4:"spring"
}
//add two new items inside object
object1.no5="basanta";
object1.no6="siris";
//console the object
console.log(object1);
//extract keys and vaalues and console it 
const keyItems=Object.keys(object1);
const valueItems=Object.keys(object1);
console.log(keysItems ,valueItems);
//extract the value of first key inside that object
const firstItem= object1.no5;
// console the first value
console.log(firstItem);