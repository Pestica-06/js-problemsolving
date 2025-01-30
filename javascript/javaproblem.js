
//EXCERCISE

//1
function calculateArea() {
 const radius = 5;
 var area = Math.PI * radius * radius;
 console.log(area);
}


function greetUser() {
var userName = "John";
 console.log(userName);

}

calculateArea();
greetUser();

//2
let count = 1;
while (count <= 100) {
 console.log("Counting down: " + count);
 count = count + 1;
}

//3
let temperature = 30;
  if (temperature < 20) {
    console.log("It's cold outside.");
   } 
  else {
    console.log("It's warm outside.");
   }
   
//4

function checkNumber(num) {
  if (num < 0){
    console.log("Negative");
  }
  else if (num >0) {
    console.log("Positive");
  } 
  else {
    console.log("Zero");
  }
}

checkNumber(-5);
checkNumber(0);
checkNumber( 20);

//5
function sumnumbers(n){
  let i=0;
  let sum=0;
  while(i<=n){
  sum=sum+i;
  i++;
}
console.log(sum);
}

sumnumbers(5);


//6
function calculatefactorial(n){
  let fact=1;
 let i=0;
 while(i<=n){
 fact=fact*n;
 n--;
 i++;
 }
 console.log(fact);
}
calculatefactorial(4);

//7
function printevennumbers(n){
let i=0;
while(i<=n){
  if(i%2==0){
    console.log(i);
  }
  i++;
}
}
printevennumbers(20);


//8
function sumNumbers(n) {
  let sum = 0;
  let i = 0;
    while (i <= n) {
    sum += i;
    i++;
  }
    return sum;
}

//9
function classifynumbers(number){
  if(number%3==0&&number%5==0){
    console.log("Divisible by both 3 anad 5");
  }
  else if(number%3==0){
   console.log("Divisible by 3");
  }
  else if(number%5==0){
    console.log("Divisible by 5");
  }
  else if(number%3!=0||number%5!=0){
    console.log("Not divisible by 3 or 5");
  }
}

classifynumbers(18);


//10
function getdayname(day){
  switch(day){
    case 1:
      console.log("Sunday");
      break;
    case 2:
        console.log("Monday");
        break;
    case 3:
         console.log("Tuesday");
          break;
    case 4:
            console.log("Wednesday");
            break;
    case 5:
              console.log("Thursday");
              break;
    case 6:
                console.log("Friday");
                break;
    case 7:
                  console.log("Saturday");
                  break;
  }
}
getdayname(6);

//11
function printMultiplicationTable(n,r){
  result=0;
for(let i=r;i>0;i--){
  result=n*i;
  console.log(n+"*"+i+"="+result);
}
}
printMultiplicationTable(5,6);

//12
function Laps(){
let i=1;
while(i<=10){
    console.log("The robot completes the lap :"+ i);
    i++;
}
console.log("Robot completes all");

}
Laps();

//13
function batterylow(){
  let i=100;
while(i>20){
    console.log("Battery level:"+i+"%");
    i-=5;
}
console.log("Battery is low");

}

batterylow();

//14
function robotdirection(direction){

switch (direction){
    case "east":
        console.log("robot in north");
        break;
    case "west":
        console.log("robot in west direction");
        break;
    case "north":
        console.log("robot in north");
        break;
    case "south":
        console.log("robot in south direction");
        break;
    default:
        console.log("invalid");
        break;
}
}

robotdirection("north");

//15
function flight(){
  let i=1000;
while(i>0){
    console.log("Flight is travelling:"+" " + i+"ft");
    i-=10;
}
console.log("Flight has arrived");
}
flight();

//16
function userdestination(Mydestination){
  switch(Mydestination){
    case 'Chicago':
        console.log("Chicago")
        break;
    case 'Mexico':
        console.log("Mexico");
        break;
    case 'Tokyo':
        console.log("Tokyo");
        break;
    default:
        console.log("Wrong destination");
        break;
}
}
userdestination('Chicago');

//17
function altitude(){
  for(let i=100;i<=1000;i+=100){
    console.log("Interval"+" "+i+"ft");
  }
  console.log("1000ft in 10th interval");
}

altitude();










//ARRAY
//1

let train_departures=[10,15,7,20,5];
let temp=train_departures[0];
for(let i=0;i<train_departures.length;i++){
       if(train_departures[i]<temp){
        temp=train_departures[i];
       }
}
console.log(temp);


//2
let seat =[1, 0, 1, 1, 0, 0, 1, 0];
    let num=0;
    for(let i=0; i<seat.length; i++){
        if(seat[i]==0){
            num++;
        }
    }
console.log(num);

//3
let soldiers= [120, 300, 250, 180, 150];
let sol=soldiers[0];
for(let i=0;i<soldiers.length;i++){
  if(soldiers[i]>sol){
    sol=soldiers[i];
  }
}
console.log(sol);

//4
function average(){
let average=0;
let result=0;
let populations = [50, 60, 70, 80, 90];
for(let i=0;i<populations.length;i++){
  average=average+populations[i];
}
result=average/populations.length;
console.log(result);
}
average();

//5
function level(){
let water_levels = [30, 50, 20, 40, 60];
let level= water_levels [0];
for(let i=0;i<water_levels.length ;i++){
  if(water_levels [i]<level){
    level=water_levels[i];
  }
}
console.log(level);
}
level();

 //6
let festival=[30, 15, 45, 10, 25];
      let current=Infinity;
      for (let i=0; i<festival.length;i++){
        if(festival[i]<current){
            current=festival[i]
            
        }  
      }
      console.log("upcoming festival is:"+ current)


  // 7//
       let landing_times = [12, 15, 12, 18, 20];
        let hasDuplicates = (landing_times);
       if (hasDuplicates) {
           console.log("Two or more helicopters are scheduled to land at the same time.");
       }
       else {
           console.log("No helicopters are scheduled to land at the same time.");
       }
      
 //8
let temperatures=[75, 80, 72, 85, 90];
for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] > 80){
            console.log(temperatures[i])
        }
        
    }

//9
    let students_per_route = [45, 55, 30, 60, 40];
    let bus=0;
    for(let i=0;i<students_per_route.length;i++){
        bus=bus+students_per_route[i];
    }
    console.log(Math.round(bus / 50));
        


//10
function dailyexpense(expense){
    let sum=0;
    for(let i=0; i<expense.length; i++){
        sum =sum+expense[i];
    }
    return sum;
    
}
let expense=[49,55,59,63,75,78,79];
console.log( "total expense:"+dailyexpense(expense)); 

//11
function averageGrade(){
  let Grade=[20,30,40,50,60];
  sum=0;
  for( let i=0; i<Grade.length; i++){
      sum=sum+Grade[i];
  }
  return sum/Grade.length;
}
console.log(averageGrade());


//12
function totalages(){
  let ages=[18,20,33,12,29];
  for(let i=0;i<ages.length; i++ ){
      if(ages[i]>=18){
          console.log(ages[i]);
      }
  }
}
totalages();


//13
function even(){
  let num=[2,4,6,8,10]
  sum=0;
  for(let i=0; i<num.length; i++){
      sum=sum+num[i];
  }
  return sum;
}
console.log(even());










//ARRAY METHODS AND OBJECTS

//1
let color=["Blue","Red"];
color.push("Blonde","brown");
console.log(color);

//2
let fruits=["apple","orange","kiwi","mango","pineapple"];
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

//3
let sports=["cricket","football"];
console.log(sports);
sports.unshift("basketball","hockey","valleyball");
console.log(sports);

//4

let devices=["earphone","laptop","television"];
console.log(devices.indexOf("laptop"));

//5
let string= "HTML-CSS-JavaScript";
let arr=string.split("-");
console.log(arr);

//6
let number=[1,2,3,4,5];



//7
 let fruit=["apple","orange","banana"];
 let str=fruit.join(",");
 console.log(str);

//8
let car={
  model:1,
  year:2024,
}
console.log(car.model);

//9
let books=[
  book1={
    title:"Courage to be disliked",
    author:"philosopher",
  },
  book2={
    title:"hello",
    author:"ffa",
  },
]
console.log(books[0].title);


//10
let cars =[  { brand: "Tata", model: "Nano" },
  { brand: "Honda", model: "Civic" },
]
cars[0].year=2000;
cars[1].year=2001;
console.log(cars[0]);
console.log(cars[1]);

//11
let products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
]
console.log(products[0].price+products[1].price);

//12
let students = [
  { name: "Hussain", grade: "A" },
  { name: "Sham", grade: "B" },
  { name: "Jeeva", grade: "A" },
  { name:"Santhosh", grade:"B"},
  {name:"Udhaya", grade:"A"}

]
let value=[]
for(let i=0; i<students.length;i++){
  if(students[i].grade=="A"){
      value.push(students[i].name)
      
  }
}
console.log(value);











///REAL WORLD PROBLEMS///

//1.Average of Scores
//Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.
  
function averagevalue(n){
  let sum=0;
  for (let i=0; i<n.length; i++){
    sum =sum+n[i]
  }
  return sum/n.length

}
let n=[20,30,40,50,60]
console.log(averagevalue(n))


//2.Finding Maximum Score
//You have an array of test scores for 7 students. Write a program to find and print the highest score 
//using the Math.max() function along with the spread operator.
let score =[55,74,65,70,60,78,91];
let highest=score[0];
for(let i=1; i<score.length; i++){
if(score[i]>highest){
highest=score[i]
}

}
console.log(highest)

//3.Number System Conversion
//Write a program that stores an array of 3 decimal numbers. Convert each number to its binary equivalent 
//using the toString(2) method and print the binary values.

let decimal=[12,14,16]
for(let i=0; i<decimal.length; i++){
console.log(decimal[i].toString(2));
}


/*4. Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]). 
Perform an AND operation on corresponding elements from both arrays and store the result in a new array.
Print the resulting array. */

function boolean(){
let value1=[true, false, true];
let value2=[false, true, true];
let temp=[];
for(let i=0; i<value1.length;i++){
temp.push(value1[i]&&value2[i]);
}
console.log(temp);
}
boolean();

/* 
5.Percentage Increase in Prices
Create an array of old prices for 4 items and another array with the new prices. 
Write a program to calculate and print the percentage increase for each item. */

let oldPrice = [100, 250, 500, 700];
let newPrice = [120, 260, 550, 800];
for(let i = 0; i < oldPrice.length; i++){
let percentageIncrease = ((newPrice[i] - oldPrice[i]) / oldPrice[i]) * 100;
console.log(`Item ${i + 1}: ${percentageIncrease.toFixed(2)}% increase`);
}

/* 
6.Set Theory (Union of Two Sets)
Write a program that takes two arrays of numbers representing two sets. 
Create a new array that represents the union of both sets (without duplicates) and print the result. */

let set1=[30,40,15,35];
let set2=[5,15,70,20];
let unionSet=[...new Set([...set1, ...set2])];
console.log(unionSet);


/* 
7.Finding the Mode (Most Frequent Element)
Write a program to find and print the mode (the number having the highest count) in an array of 10 numbers. 
If there are multiple modes, print any one */

function findMode(arr){
let maxCount = 0;
let mode;
for(let i = 0; i < arr.length; i++){
  let count = 0;
  for(let j = 0; j < arr.length; j++){
      if(arr[i] === arr[j]){
          count++;
      }
  }
  if(count > maxCount) {
      maxCount=count;
      mode = arr[i];
  }
}
return mode;
}
console.log(findMode([4, 5, 6, 7, 4, 5, 6, 6, 5, 4, 6]));

/*  8.Modulus Operation for Time Calculation
Create an array of times (in minutes) that different tasks take to complete. 
Write a program to find out how many full hours and leftover minutes each task takes using modulus (%) and division (/) operators,
and save the result in the same array. Print the array. */


function time(taskTime){
for(let i = 0; i < taskTime.length; i++){
  let hours = Math.floor(taskTime[i] / 60);
  let minutes = taskTime[i] % 60;
  taskTime[i] = { hours: hours, minutes: minutes };
}
return taskTime;
}
console.log(time([100, 300, 220, 340]));


/*  9.Simple Interest Calculation
Create an array of 10 objects with keys principal, rateOfInterest and noOfYears. 
Find the simple interest for each array object and store it in a new array. Print this array. */

let Simple_Interest = [
{ principal : 10000, rateOfInterest : 5, noOfYears: 4},
{ principal : 12000, rateOfInterest : 4, noOfYears: 3},
{ principal : 14000, rateOfInterest : 5, noOfYears: 4},
{ principal : 16000, rateOfInterest : 4, noOfYears: 3},
{ principal : 18000, rateOfInterest : 5, noOfYears: 4},
{ principal : 20000, rateOfInterest : 4, noOfYears: 3},
{ principal : 22000, rateOfInterest : 5, noOfYears: 4},
{ principal : 24000, rateOfInterest : 4, noOfYears: 3},
{ principal : 26000, rateOfInterest : 5, noOfYears: 4},
{ principal : 28000, rateOfInterest : 4, noOfYears: 3},
];
let empty = [];
for(let i = 0; i < Simple_Interest.length; i++){
   empty.push(Simple_Interest[i].principal * Simple_Interest[i].rateOfInterest * Simple_Interest[i].noOfYears / 100);
}
console.log(empty);

/* 10. Calculating Total Marks of Students 
You have an array of 10 objects, each representing a student with keys subject1Marks, subject2Marks, and subject3Marks. 
Write a program to calculate the total marks for each student and store them in a new array.
Print the new array. */


students = [
{ subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
{ subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
{ subject1Marks: 70, subject2Marks: 90, subject3Marks: 90 },
{ subject1Marks: 90, subject2Marks: 80, subject3Marks: 55 },
{ subject1Marks: 80, subject2Marks: 100, subject3Marks: 75 },
{ subject1Marks: 95, subject2Marks: 70, subject3Marks: 60 },
{ subject1Marks: 30, subject2Marks: 85, subject3Marks: 40 },
{ subject1Marks: 100, subject2Marks: 40, subject3Marks: 85 },
{ subject1Marks: 80, subject2Marks: 75, subject3Marks: 80 },
{ subject1Marks: 60, subject2Marks: 30, subject3Marks: 45 }
];
let newArr = [];
for(let i = 0; i < students.length; i++){
  newArr.push(students[i].subject1Marks + students[i].subject2Marks + students[i].subject3Marks);
}
console.log(newArr);


/*  11.Calculating Total Monthly Expenses
You have an array of 10 objects, each representing monthly expenses with keys rent, groceries, and utilities.
Write a program to calculate the total monthly expense for each object and store it in a new array. Print the new array.
*/

expenses = [
{ rent: 1000, groceries: 500, utilities: 200 },
{ rent: 800, groceries: 400, utilities: 150 },
{ rent: 2000, groceries: 600, utilities: 300 },
{ rent: 1500, groceries: 300, utilities: 350 },
{ rent: 1200, groceries: 550, utilities: 250 },
{ rent: 900, groceries: 480, utilities: 152 },
{ rent: 1300, groceries: 590, utilities: 280 },
{ rent: 180, groceries: 440, utilities: 190 },
{ rent: 1100, groceries: 290, utilities: 220 },
{ rent: 950, groceries: 470, utilities: 190 },
];
let newArrr = [];
for(let i = 0; i < expenses.length; i++){
  newArrr.push(expenses[i].rent + expenses[i].groceries + expenses[i].utilities);
}
console.log(newArrr);