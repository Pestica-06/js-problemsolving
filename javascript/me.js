// let person={
//     name:"pestica",
//     age:18,
// }
// person.age=19;
// console.log(person);

// function fibonacci(n) {
//     if (n === 1) {
//         console.log("1");
//         return;
//     }
//     if(n === 2) {
//         console.log("1, 1");
//         return;
//     }

//     let outputStr = "1, 1";
//     let pTerm = 1; // Previous Term
//     let ppTerm = 1;// Previous Pervious Term

//     for (let i = 3; i <= n; i++) {
//         currTerm = pTerm + ppTerm;
//         ppTerm = pTerm;
//         pTerm = currTerm;
//         outputStr = outputStr + ", " + currTerm;
//     }
//     console.log(outputStr);
// }
// fibonacci(5);
// let num=1000;
// for(let i=num;num>=0;i--){
// if(i%3==0){
//   console.log(num);

// }
// }

// //reverse string
// let reversestring=(str)=>str.split("").reverse().join("");
// console.log(reversestring("hello"));

// function reversetring(str){
//  let hello=str.split("");
//  let hi= hello.reverse();
//   let result=hi.join("");
//   console.log(result);
// }
// reversetring("pestica");

// function divibleof2(array){
//  return array.filter(arr=>arr%2==0);
// }

// console.log(divibleof2([2,3,6,8,10]));

// let nestedarray=[[1,2],[3,5],[9,0]];
// let result=Math.max(...nestedarray.flat());
// console.log(result);

//fibonacci series
// let num = 7;
// let sequence = [0, 1];
// while (sequence.length < num) {
//   nextnum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
//   sequence.push(nextnum);
// }
// console.log(sequence);

// let string=["hello","wow","dance"];
// return string.replace(/\b\w/g, l => l.toUpperCase());
// console.log(str);

// function fibonacciSeries(n) {
//   let t1 = 0;
//   let t2 = 1;
//   let t3;
//   if (n == 1) console.log (t1);
//   if (n == 2) console.log(t2);
//   if (n >= 3) {
//     for (let i=3; i <= n; i++) {

//       t3 = t2 + t1;
//       t1 = t2;
//       t2 = t3;
//     }
    
//   }
//   console.log(t3);
  
// }
// console.log(fibonacciSeries(5));


// program to generate fibonacci series up to n terms


// const number = 18;
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

//====================palindrome
// function isPalindrome(str) {
//   let j = str.length - 1
//   for (let i = 0; i < str.length / 2; i++) {
//       if (str[i] != str[j]) {
//           return false;
//       }
//       j--;
//   }
//   return true;
// }
// console.log(isPalindrome("malayalam"));



