



//=====factorial
// let n=5;
//  let fact=1;
//  let sum=0;
//  if(n===0){
//     sum=1;
//  }
//     for(let i=1;i<=n;i++){
//         fact=fact*i;
//         sum=sum+fact;
//     }

// console.log(sum);

//======prime number in range
// let n=15;
// let m=5;
// str="";
// for(let i=m;i<n;i++){
//     for(let j=2;j<i;j++){
//         if(i%j===0 && !i==j){
//             str=str+j+",";
//         }
//     }
// }
// console.log(str);

// let n=4;
// for(let i=1;i<=n;i++){
//     str="";
//     gap="";
//     for(let j=0;j<i;j++){
//     if(i%2==0){
//         str=str+"*"+" ";
//     }
//     else{
//         str=str+i+" "
//     }
// }
// for(let k=0;k<n-i;k++){
//     gap=gap+" ";
// }
//     console.log(gap+str);
// }
// function digitSumFact(n) {
//     let num = n; 
//     let sum = 0;
//     while ( num > 0) {
//         let digit = num % 10;
//         sum += factorial(digit);
//         num = Math.trunc(num / 10); 
//     }

//     if(n == sum) {
//         console.log("Strong");
//     }
//     else {
//         console.log("Not Strong");
//     }
// }

// function factorial(n) {
//     let fact = 1;
//     for (let i  = 1; i <= n; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }
// digitSumFact(25);
// let n="hello";
// let str="";
// gap="";
// for(let i=0;i<n.length;i++){
//     str=str+n[i];
//     for(let j=0;j<n-i;i++){
//         gap=gap+" ";
//     }
//     console.log(gap+str);
// }

//=========================================================================================
// function prime(a,b){
//     let str=""
//     for(i=a;i<b;i++){
//         let prime=true;
//         if(i<2){
//             prime=false;
//         }
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 prime = false;
//                 break;
//             }
//         }
//         if(prime){
//             str+=i +",";
//         }
//     }
//     if(str==""){
//         console.log("no prime number")
//     }
//     console.log(str.slice(0,-1));
// }
// prime(10,30);

//======================================================================


// function lcm(a,b){
// let min=Math.min(a,b);
// while(true){
//     if(min%a==0 && min%b==0){
//         console.log(min);
//         break;
//     }
//     min++;
// }
// }
// lcm(10,20);
//===============================================
//===============================================

// function gcd(a,b){
// let min=Math.min(a,b);
// while(true){
//     if(a%min==0 && b%min==0){
//         console.log(min);
//         break;
//     }
//     min--;
// }
// }
// gcd(10,20);
//==========================

// function factorial(n){
//     fact=1;
//     sum=0;
//     for(let i=1;i<=n;i++){
//      fact=fact*i;
//      sum=sum+fact;

//     }                     
//     console.log(fact);
//     console.log(sum);
// }
// factorial(5);





//======================hollow sphere
//4
// function printHollowSquare(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || i === n|| j === 1 || j === n ) {
//                 row += '*';
//             } else {
//                 row += ' ';
//             }
//         }
//         console.log(row);
//     }
// }
// // Example usage
// printHollowSquare(n);

//=======================================is prime
//2

// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// // Example usage
// let num = 29;
// console.log(isPrime(num));


//========================================
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

//===========================================
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
// function printStarHashAlter(n) {
//     // Enter your code here
//     for(let i=1;i<=n;i++){
//         str="";
//         gap="";
//         if(i%2==0){
//             for(let j=0;j<i;j++){
//                 str=str+"#"+" ";
//             }
//         }
//         else{
//             for(let j=0;j<i;j++){
//                 str=str+"*"+" ";
//             }
//         }
//         for(let k=0;k<n-i;k++){
//             gap=gap+" ";
//         }
//         console.log(gap+str);
//     }
//     for(let i=n-1;i>0;i--){
//         str="";
//         gap="";

//       for(let j=n-1;j>0;j--){
//         if(i%2!=0){
//                 str=str+"*"+" ";
//             }
//             else{
//                 str=str+"#"+" ";
//         }
//     }
       
//         for(let k=0;k<i;k++){
//             gap=gap+" ";
//         }
//         console.log(gap+str);
//     }
  
// }
// printStarHashAlter(4);

//=0 1,0 0,0 1
// let n="23,31";
// let ans=n.split(",");
// let str="";
// for(let i=0;i<ans.length;i++){
//     let prime=true;
//  for(let j=2;j<ans[i];j++){
//     if(ans[i]%j==0){
//         str=str+"0"+" ";
//         prime=false;
//         break;
//     }
//  }
//  if(prime){
//     str=str+"1"+" ";
//  }
// }
// console.log(str);

//==GCD BETWEEN THREE NUMBERS

// function threenumgcd(a,b,c){
// let max=
// }

//==============lcm without build in
// function lcm(a,b){
// let c=a*b;
// for(let i=1;i<c;i++){
//     if(i%a==0 && i%b==0){
//         console.log(i);
//         break;
//     }
// }
// }
// lcm(3,15);





//================================CO PRIME SUM LIKE GCD

// function areCoPrime(a, b) {
//     // Enter your code here  
//   let c=0;
//   let result=1;
//   if(a>b){
//       c=a;
//   }
//   else{
//       c=b;
//   }
  
//   for(let i=c;i>=1;i--){
//       if(i%a==0 && i%b==0){
//           result=i;
//           break;
//       }
//   }
//   if(result==1){
//       console.log("co-prime");
//   }
//   else{
//       console.log("Not a co-prime");
//   }
// }

// areCoPrime(12,18);






//gcd sum by euclid'smethod

//60%24==12
//24%12==0
//then gcd=12

// let n=60;
// let m=24;
// let rem;
// let ans;
// if(m>n){
//   ans=m%n;
// }
// else{
//    ans=n%m;
// }
// while(ans>=0){

//  if(ans==0){
//     console.log(d);
//  }
//  else{

    
//  }
// }

//===============================addtosinglrdigit
// function addDigitsToSingle (n) {
   
//     let num = n; 
    
//   //  Doing this only if the number is greater than or equal 10
//    // Otherwise the number is single digit
//     while (num >= 10) { 

//         let sum = 0;
//         while ( num > 0) {
//             let digit = num % 10;
//             sum += digit;
//             num = Math.trunc(num / 10); 
//         }

//         num = sum;// Taking the num as sum
       
        

//     }

//     console.log(num); 
// }

// addDigitsToSingle(78945623);


//=====easy way for lcm
// function LCM(a,b,d){
//     let c=(a*b)*d
//     for(let i=1;i<=c;i++){
//            if(i%a==0 &&  i%b==0 && i%d==0){
//              console.log(i)
//              break
//            }
//            c++
//     }
//   }
//   LCM(12,11,13)

//COPRIME
// function gcf(a,b){
// let c;
//   if(a<b){
//     c=b
//   }
//   else{
//            c=a
//   }
//   let num=0
//   for(let i=1;i<c;i++){
//      if(a%i==0 && b%i==0){
//          num=i
//      }
//   }
//   if(num==1){
//     console.log("co-prime")
//   }
//   else{
//     console.log("not co-prime");
//   }
// }
// gcf(3,11);



