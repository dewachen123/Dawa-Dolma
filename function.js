//block of tasks
// function addNumber() {
//     const a=10;
//     const b=20;
//     return a+b;
// }

// const fn= addNumber();

// console.log(fn);

// function multiplyNumber(x,y) {  //parameter
//     // const x=2;
//     // const y=3;
    
//     return x*y;
// }

// const fn= multiplyNumber(10,20);   //agument

// console.log(fn);




//build a function with 3 parameters

// function values(a,b,c) {
//     // (assign the value inside the function)
//     const d=4;
//     //( return a value)
//     return a+b*c*d;

// }

// const fm= values(2,5,2)

// //console and check those values

// console.log(fm);

// const addNumber =(a,b) => a+b   //return a+b pani lekhna milxa 
// const fn =addNumber(10,30)
// console.log(fn);


// const substractNum =(a,b)=> a-b
// const fn =substractNum(30,20)
// console.log(fn);


function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizbuz");
  } else if (num% 3 === 0) {
    console.log("fizz");
  } else if (num % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(invalid);
  }
}

fizzBuzz(7); 