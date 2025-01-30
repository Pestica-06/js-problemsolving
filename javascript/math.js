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
//       if(a%i==0 && b%i==0){
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

// areCoPrime(12,28);



//addDigitstoSingle
// function addDigitstoSingle(num) {
//     let numArray = [];
//     let total = 0;
//     let totalArr = [];
//     let res = 0;
//     while (num > 0) {
//         numArray.unshift(num % 10);
//         num = Math.floor(num / 10);
//     }
//     for (let i = 0; i < numArray.length; i++) {
//         total += numArray[i];
//     }
//     console.log(total)
//     totalArr = total.toString().split('').map(Number);
//     for (let j = 0; j < totalArr.length; j++) {
//         res += totalArr[j]
//     }
//     console.log(res);
// }
// addDigitstoSingle(78985223)




// function findGCD(a, b) {
//     if (a === 0 || b === 0) return 0;
  
//     while (a != 0) {
//       let temp = a % b;
//       b = a;
//       a = temp;
//     }
//     return a;
//   }
  
//   // Test cases
//   console.log(findGCD(10, 30)); 
//   console.log(findGCD(0, 10));  
//   console.log(findGCD(30,40));
//   console.log(findGCD(7, 13));




// function areCoPrime(a, b) {
//     // Enter your code here  
//   let c=0;
//   let result=0;
//   if(a>b){
//       c=b;
//   }
//   else{
//       c=a;
//   }
  
//   for(let i=c;i>0;i--){
//       if(a%i==0 && b%i==0){
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

// areCoPrime(8,16);




// function gcd(a, b) {
//     while (b!== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// // Example usage
// let a = 48;
// let b = 18;
// console.log(gcd(a, b));



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




// function calculatesqr(num){
//     return num * num;
// }

// console.log(calculatesqr(5));




// function isadult(age){
//     if(age>=18){
//         return true;
//        // console.log("true");
//     }
//     else{
//         return false;
//       //  console.log("false")
//     }
// }
// age=console.log(isadult(19));
// let i=1;



// function lcm(num1,num2) {
//     let min=Math.max(num1,num2);
//     while(true){
//         if(min%num1==0&&min%num2==0){
//             console.log(`The LCM of ${num1} and ${num2} is ${min}`)
//             break;
//         }
//         min++;
//     }
// }
// lcm(7,5);



// function factorial(n){
//     let res=1;
//     let sum=0;
//     if(n==0||n==1){
//         return 1;
//     }
//     for(let i=0;i<=n;n--){
//         res*=i;
//         sum+=res;
//     }
//     console.log(sum);
// }
// factorial(9);



//checking it is divible by 11 or not
// let sum=0;
// let array=[20,5,25,50,21];
// for(let i=0;i<=array.length-1;i++){
//  sum=sum+array[i];
// }
// if(sum%11==0){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }





//harshad number


// function isHarshadNumber(n) {
//     let originalNumber = n;
//     let sumOfDigits = 0;

//     // Calculate the sum of digits
//     while (n > 0) {
//         sumOfDigits += n % 10;
//         n = (n - (n % 10)) / 10;
//     }

//     // Check if the original number is divisible by the sum of its digits
//     if (originalNumber % sumOfDigits === 0) {
//         return "Harshad";
//     } else {
//         return "Not Harshad";
//     }
// }

// // Example usage
// let n = 18;
// console.log(isHarshadNumber(n)); 




// function lcm(num1,num2) {
//     let max=Math.max(num1,num2);
//     while(true){
//         if(max%num1==0&&max%num2==0){
//             console.log(`The LCM of ${num1} and ${num2} is ${max}`)
//             break;
//         }
//         max++;
//     }
// }
// lcm(10,150);



// function ispowerof3(n){
//   if(n<0){
//     console.log("no");
//   }
//   while(n%3==0){
//     n/=3;
//   }
//    if(n==1){
//     console.log("yes");
//    }
//    else{
//     console.log("no");
//    }

// }
// ispowerof3(112);




// program to generate fibonacci series up to n terms


// const number = 4;
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }





// program to generate fibonacci series up to n terms


// const number = 4;
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }





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


//fibonacci series
// let num = 7;
// let sequence = [0, 1];
// while (sequence.length < num) {
//   nextnum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
//   sequence.push(nextnum);
// }
// console.log(sequence);



// function factorial(n){
//     if (n==0 || n==1) {
//         return 1;
//     }
//     let res=1;
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         res *=i;
//         sum+=res;
//     }
//     console.log(sum);
// }
// factorial(5);



// function ispowerof3(n){
//   if(n<0){
//     console.log("no");
//   }
//   while(n%3==0){
//     n/=3;
//   }
//    if(n==1){
//     console.log("yes");
//    }
//    else{
//     console.log("no");
//    }

// }
// ispowerof3(112);



// function strongNumber(int) {
//     let intStr = int.toString();
//     let total = 0;

//     for (let i = 0; i < intStr.length; i++) {
//         let digit = parseInt(intStr[i]);
//         let fact = 1;
        
//         // Calculate factorial of the digit
//         for (let j = 1; j <= digit; j++) {
//             fact *= j;
//         }
        
//         // Add factorial to the total
//         total += fact;
//     }

//     if (total === int) {
//         console.log("Strong number");
//     } else {
//         console.log("Not a strong number");
//     }
// }
// strongNumber(176);

// strongNumber(145);



// function lcm(num1,num2) {
//     let max=Math.max(num1,num2);
//     while(true){
//         if(max%num1==0&&max%num2==0){
//             console.log(`The LCM of ${num1} and ${num2} is ${max}`)
//             break;
//         }
//         max++;
//     }
// }
// lcm(10,150);





// function isHarshadNumber(n) {
//     let originalNumber = n;
//     let sumOfDigits = 0;

//     // Calculate the sum of digits
//     while (n > 0) {
//         sumOfDigits += n % 10;
//         n = (n - (n % 10)) / 10;
//     }

//     // Check if the original number is divisible by the sum of its digits
//     if (originalNumber % sumOfDigits === 0) {
//         return "Harshad";
//     } else {
//         return "Not Harshad";
//     }
// }

// // Example usage
// let n = 18;
// console.log(isHarshadNumber(n)); 



// function digit(n){
//     let num=n;
//     let digit;
//   if(num<10){
//     console.log(n)
//   }
//   while(num>10){
//     let sum=0;
//     while(num>0){
//         digit=num%10;
//         sum+=digit;
//         num=Math.trunc(num/10);
//     }
//     num=sum;
//   }
//   console.log(num);
// }
// digit(2469878)






// function discount(n){
// let discount=10;
// let day=1;
// for(let i=0;i<=5;i++){
//  console.log("Day"+day+" "+discount+"%"+ " "+"Amount"+n);
//  n=n - n/discount;
//  discount+=5;
//  day++;
// }
// }
// discount(300);




// calculateArea();
// greetUser();
// function calculateArea() {
//  const radius = 5;
//  var area = Math.PI * radius * radius;
//  console.log(area);
// }
// function greetUser() {
//     var userName = "John";
//  console.log(userName);
// }
// let count = 1;
// while (count<=100) {
//  console.log("Counting down: " + count);
//  count = count +1 ;
// }
// checkNumber(-5);
// checkNumber(0);
// checkNumber(10, 20);
// function checkNumber(num) {
//   if (num < 0)
//     console.log("Negative");
//   else if (num >0) {
//     console.log("Positive");
//   }
//    else {
//     console.log("Zero");
//   }
// }


// let temperature = 30;
// if (temperature ==20) {
//  console.log("It's cold outside.");
// } else {
//  console.log("It's warm outside.");
//}




// //first sum
// function sumofeven(n){
//     let sum=0;
//     for(let i=0;i<=n;i++){
//         if(i%2==0){
//             sum=sum+i;
//         }
//     }
//     console.log("sum  even num:"+sum);
// }
// sumofeven(20);

// //second sum
// function multiplesof3(n){
//    let sum=0;
//    let num=3;
//    for(i=1;i<=n;i++){
//     sum=i*num;
//     console.log(sum);
//    }

// }
// multiplesof3(3);

// //third sum
// function cricket(teamscore,targetscore,oversleft){
//     if(teamscore>=targetscore){
//         console.log("Team wins by DL method");
//     }
//     else if(teamscore<targetscore&&oversleft>0){
//         console.log("Match to be continued");
//     }
//     else if(teamscore<targetscore&&oversleft==0){
//         console.log("Team loses by DL method");
//     }
// }

// cricket(18,19,8);



/*function leap(year){
    if(leap%4==0 && leap%100!=0 || leap%400==0){
        console.log("leap year");
    }
    else{
        console.log("not a leap year");
    }
}

leap(2024);*/

/*function leap(year){
    if(year%400==0){
        console.log("leap year");
    }
    else if(year%4||leap%100!=0){
        console.log("leap year");
    }
    else{
        console.log("not a leap year")
    }
}

leap(2025);*/


/*function sum(n){
    let sum=0;
    let rem=0;
    while(n>0){
        rem=n%10;
        sum+=rem;
        n=Math.trunc(n/10);
    }
    return sum;
}
result=sum(1567);
console.log(result);*/



// function strongNumber(int) {
//     let intStr = int.toString();
//     let total = 0;

//     for (let i = 0; i < intStr.length; i++) {
//         let digit = parseInt(intStr[i]);
//         let fact = 1;
        
//         // Calculate factorial of the digit
//         for (let j = 1; j <= digit; j++) {
//             fact *= j;
//         }
        
//         // Add factorial to the total
//         total += fact;
//     }

//     if (total === int) {
//         console.log("Strong number");
//     } else {
//         console.log("Not a strong number");
//     }
// }

// strongNumber(145);






// function large_func(a,b,c){
//     if(a<b && b>c){
//         console.log(b);
//     }
//     else if(a>b && a>c){
//         console.log(a);
//     }
//     else{
//         console.log(c);
//     }
// }
// large_func(10,30,5);



// function odd_num(n){
//     odd=1;
//     for(let i=1;i<=n;i++){
//         console.log(odd);
//         odd=odd+2;
//     }
// }
// odd_num(4);


// function discount(value){
//     let discount=5;
//     for(let i=1;i<10;i++){
//         discount=discount+value;
//     }
//     console.log(discount+"%");
// }
// discount(2);

// function multiplesof5(a,b){
//     let result=0;
//     for(let i=b;a<=i;i--){
//       if(i%5==0){
//         console.log(i);
//       }
//     }
// }
//  multiplesof5(10,30);












