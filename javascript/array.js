// let z1=["hussain","sham","udhaya","pestica","thayub"];
// z1.push("maruthamuthu");
// console.log(z1);
// z1.pop();
// console.log(z1);

// z21=z1.join(",");
// console.log(z1);




//finding maximum value
// let arr=[12,18,14];
// let first=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(first<arr[i]){
//         first=arr[i];
//     }
// }
// console.log(first);



//finding alphapetically first
// let arr=["hello","apple","orange"];
// first=arr[0][0];
// for(let i=1;i<arr.length;i++){
//     if(first>arr[i][0]){
//         first=arr[i];
//     }
// }
// console.log(first);

//====

/*let train_departures=[10,15,7,20,5];
let temp=train_departures[0];
for(let i=0;i<train_departures.length;i++){
       if(train_departures[i]<temp){
        temp=train_departures[i];
       }
}
console.log(temp);


let len= seats.length;
let temp=seats[0];
let count=0;
for(let i=0;i<len;i++)
  if(seats[i]===0){
    count++;
}
console.log(`number of seats available are ${count}`);
let soldiers = [120, 300, 250, 180, 150];
let temp=soldiers[0];
for(let i=0; i<soldiers.length;i++){
    if(temp<soldiers[i]){
        temp=soldiers[i];
    }
}
console.log(temp);
let populations = [50, 60, 70, 80, 90];
let sum=0;
let avg=0;
let len=populations.length
for(let i=0;i<len;i++){
    sum+=populations[i];
     avg=sum/len;
}
console.log(avg);
let water_levels = [30, 50, 20, 40, 60];
let temp= water_levels[0];
let len=water_levels.length;
for(let i=0;i<len;i++){
    if(temp>water_levels[i]){
        temp=water_levels[i];
    }
}
console.log(temp);
let days_until_festival = [30, 15, 45, 10, 25];
let temp=days_until_festival[0];
let len=days_until_festival.length;
for(let i=0;i<len;i++){
    if (temp>days_until_festival[i]){
        temp=days_until_festival[i];
    }
}
console.log(temp);
let landing_times = [10, 15, 12, 18, 10];
let len=landing_times.length;
let temp=landing_times[0];
let count=0;
for(let i=0; i<len;i++){
    if(temp===landing_times[i]){
        count++;
        if(count>1){
            console.log("more than one");
        }
    }
}*/
// let  temperatures = [75, 80, 72, 85, 90];
// let len= temperatures.length;
// let temp=temperatures[0];
// for(let i=0;i<len;i++){
//     if(temperatures[i]>80){
//         console.log(temperatures[i]);
//     }
// }
/*
let students_per_route = [45, 55, 30, 60, 40];
let len=students_per_route.length;
let temp=students_per_route[0];
let busNeeded=0;
for(let i=0;i<len;i++){
    if(students_per_route[i]>50){
        busNeeded++;
    }
}
console.log(busNeeded);
*/



//===



// //alphabetically first
// function findAlphabeticallyFirst(arr) {
//     let first = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i][0] < first[0]) {
//         first = arr[i];
//       }
//     }
//     return first;
//   }

//   console.log(findAlphabeticallyFirst(["cello","aello","hello"]));




// let arr = [5, 8, 13, 21];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 13) {
//     console.log("Found 13!");  // Loop continues even after finding 13
//   }
// }


//maximum in array
// function findMax(arr) {
//     let max = arr[0]; 
//     for (let i = 1; i < arr.length-1; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }
//   console.log(findMax([2,20,16,10]));


// //alphabetically first
// function findAlphabeticallyFirst(arr) {
//     let first = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < first) {
//         first = arr[i];
//       }
//     }
//     return first;
//   }

//   console.log(findAlphabeticallyFirst(["b","c","h"]));




// find the maximum occurance of the highest element
// let arr=[4,4,1,4];
// let max=arr[0];
// let sum=0;
// for(let i=1;i<=arr.length-1;i++){
// if(arr[i]>max){
//     max=arr[i];
// }
// }
// for(let j=0;j<arr.length;j++){
//     if(arr[j]==max){
//         sum++;
//     }
// }
// console.log(sum);


//counting odd and even numbers
// let arr=[10,1,25,30,33];
// let even=0;
// let odd=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//       even=even+1;
//     }
//     else{
//         odd=odd+1;
//     }
// }
// console.log(even);
// console.log(odd);



//  function findAlphabeticallyFirst(arr) {
//     let first = arr[0]; // Start with the first element of the array.
//     for (let i = 1; i < arr.length; i++) { // Start from the second element.
//       if (arr[i] < first) { // Check if the current element is alphabetically smaller.
//         first = arr[i];
//       }
//     }
//     return first;
//   }
//    console.log( findAlphabeticallyFirst(["hello","hellz"]));



// function findAlphabeticallyFirst(arr) {
//     let first = ""; 
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < first) {
//         first = arr[i];
//       }
//     }
//     return first;
//   }

//  console.log( findAlphabeticallyFirst(["s","p"]));




//multiple of array
// let pro = 1;
// function multipleofarr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != 0) {
//       pro = pro * arr[i];
//     }
//   }
//   console.log(pro);
// }

// multipleofarr([1, 2, 3, 0, 5, -1]);


//searchelement
// let index = 0;
// function findindex(arr, x) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == x) {
//       return i;
//     }
//   }

//   return -1;
// }

// console.log(findindex([1, 2, 3, 0, 5, -1], 0));






/*student={
    Name:"Pestica",
    Age:18,
    rollno:5,
        class:"B",
    address:{
        streetname:"Parthasarathi nagar",
        pincode:65
    },
    marks:[90,85,90,80,70],
    studentdetails: function(){
        console.log("Student Name:"+this.Name);
        console.log("Student Age:"+this.Age);
        console.log("Roll no:"+this.rollno);
        console.log("class:"+this.class);
        console.log("Street Name:"+student.address.streetname);
        console.log("Average Mark:"+this.marks);}
}
student.studentdetails();*/




//let array=["papaya","apple","orange"];
//console.log(array.join(" ,"));

/*let array=[1,2,3,4,5];
for(i=array.length-1;i>=0;i--){
    console.log(array[i]);
}*/
/*
let array=[1,2,3,4,5,6,7];
let i=array.length-1;
for (let result of array){
 console.log(array[i]);
 i--;
}
let sum=0;
for(let i=0;i<array.length;i++){
   sum=sum+array[i];
}
console.log(sum);*/

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



// function multiplearray(){
//     let array=[20,70,7,9,50,80,78];
//     for(let i=0;i<=array.length;i++){
//        if(array[i]%5==0){
//            console.log(array[i]);
//        }
//     }
//     }

//    function between(a,b){
//        let array=[50,30,10,40,60];
//        for(let i=0;i<=array.length;i++){
//            if(array[i]>a&&b>array[i]){
//                console.log(array[i]);
//            }
//        }
//    }
//    between(10,60);
   
   

//    function floatfunc(){
//        let array=[20.6,5.6,7.8,88.8];
//        let sum=0;
//        let average=0;
//        for(let i=0;i<array.length;i++){
//     sum=sum+array[i];
//        }
//         average=sum/array.length;
//         console.log(Math.trunc(average));
   
//    }
//    floatfunc();


// let array=[1,2,3,4,5];
// let result=array.unshift(array[0]);
// console.log(result);

