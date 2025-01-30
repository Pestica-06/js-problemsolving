
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// let str="";
// for(let i=5;i>=1;i--){
//     str=str+"*"+" ";
//    console.log(str);
// }


// // * * * 
// //  * * 
// //   * 


// let n=3;
// for(let i=n;i>=1;i--){
  
// let str="";
// let gap="";
// let symbol="";

// for(let j=1;j<=i;j++){
//   symbol=symbol+"*"+" ";

// }

// for(let k=0;k<=n-i;k++){
//   gap=gap+" ";
// }
// str=gap+symbol;
// console.log(str);
// }


//   1 
//  1 2 
// 1 2 3 
//  1 2 
//   1 



// function printPattern() {
//   let n = 3; // Number of rows for the top half of the pattern

//   // Loop for the top half of the pattern
//   for (let i = 1; i <= n; i++) {
//     let row = "";
    
//     // Add leading spaces
//     for (let j = 1; j <= n - i; j++) {
//       row += " ";
//     }
    
//     // Add numbers 1 to i
//     for (let k = 1; k <= i; k++) {
//       row += k + " ";
//     }

//     console.log(row); // Print the row as is
//   }

//   // Loop for the bottom half of the pattern
//   for (let i = n - 1; i >= 1; i--) {
//     let row = "";
    
//     // Add leading spaces
//     for (let j = 1; j <= n - i; j++) {
//       row += " ";
//     }
    
//     // Add numbers 1 to i
//     for (let k = 1; k <= i; k++) {
//       row += k + " ";
//     }
//     console.log(row); // Print the row as is
//   }
// }

// printPattern() ;



//    1 
//   * * 
//  3 3 3 
// * * * * 

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



// ******
//      5
//   ****
//      3
//     **
//      1



// let n=6;
// for(let i=n;i>0;i--){
//   str="";
//   gap="";

//   if(i%2!==0){
//       str=str+i;
  
//     for(let i=1;i<=n-1;i++ ){
//       gap=gap+" ";
//     }
//     console.log(gap+str)
//   }
//   else{
//   for(let j=0;j<i;j++){
//     str=str+"*";
//   }
//   for(let k=0;k<n-i;k++){
//     gap=gap+" ";
//   }
//   console.log(gap+str)
// }


// ****
// *  *
// *  *
// ****



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
// printHollowSquare(4);



// *
// **
// ***
// ****
// *****

// function printTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) {
//             row += '*';
//         }
//         console.log(row);
//     }
// }
// // Example usage
// let n = 5;
// printTriangle(n);




//      1
//     1 2
//    1 2 3
//   1 2 3 4
//  1 2 3 4 5
// 1 2 3 4 5 6
//  1 2 3 4 5
//   1 2 3 4
//    1 2 3
//     1 2
//      1

// let n = 6;

// function printStar(n) {
//     // Print the upper half
//     for (let i = 1; i <= n; i++) {
//         let output = getSpaces(n - i);
//         let pattern = getNumSequence(i);
//         console.log(output + pattern);
//     }

//     // Print the lower half
//     for (let i = n - 1; i >= 1; i--) {
//         let output = getSpaces(n - i);
//         let pattern = getNumSequence(i);
//         console.log(output + pattern);
//     }
// }

// function getSpaces(n) {
//     let outputStr = "";
//     for (let i = 1; i <= n; i++) {
//         outputStr += " ";
//     }
//     return outputStr;
// }

// function getNumSequence(n) {
//     let outputStr = "";
//     for (let i = 1; i <= n; i++) {
//         outputStr += i; 
//         if (i < n) { // Avoid adding space after the last number
//             outputStr += " ";
//         }
//     }
//     return outputStr;
// }

// // Call the function to test
// printStar(n);



//   1 
//  2 2 
// 3 3 3 

// let n=3;
// for(let i=1;i<=n;i++){
// str="";
// gap="";
// for(let j=0;j<i;j++){
//     str=str+i+" ";
// }
// for(let k=0;k<n-i;k++){
//     gap=gap+" ";
// }
// console.log(gap+str);
// }




//pattern diamond
// let n=9;
// for(let i=1;i<=n;i++){
//     str="";
//     gap="";
//     for(let j=0;j<i;j++){
//         if(i%2==0){
//             str=str+"$"+" ";
//         }
//         else{
//          str=str+i+" ";
//         }
//     }
//     for(let k=0;k<n-i;k++){
//         gap=gap+" ";
//     }
//     console.log(gap+str);
// }
// for(let i=n-1;i>0;i--){
//     str="";
//     gap="";
//     for(let j=0;j<i;j++){
//         if(i%2==0){
//             str=str+"$"+" ";
//         }
//         else{
//           str=str+i+" ";
//         }
//     }
//     for(let k=n-i;k>0;k--){
//         gap=gap+" ";

//     }
//     console.log(gap+str);
// }





// *****
// #####
// *****
// #####
// *****
// let n=5;
// for(let i=1;i<=n;i++){
//     str="";
//     if(i%2==0){
//         for(let j=0;j<n;j++){
//         str=str+"#";
//         }
//     }
//     else{
//         for(let j=0;j<n;j++){
//             str=str+"*";
//         }
//     }
//     console.log(str);




//PATTERN PRINTING

// 1         1 
// 2 2     2 2 
// 3 3 3 3 3 3 
// function generatePattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let line = ""; // Initialize an empty string for each row

//         // Left side of the numbers
//         for (let j = 1; j <= i; j++) {
//             line += i + " ";
//         }

//         // Spaces in the middle
//         for (let k = 1; k <= (rows - i) * 4; k++) { // Adjust the number of spaces per row
//             line += " ";
//         }

//         // Right side of the numbers
//         for (let j = 1; j <= i; j++) {
//             line += i + " ";
//         }

//         console.log(line); // Print the row
//     }
// }

// // Call the function to generate the pattern for 3 rows
// generatePattern(3);



// *****
// #####
// *****
// #####
// *****
// let n=5;
// for(let i=1;i<=n;i++){
//     str="";
//     if(i%2==0){
//         for(let j=0;j<n;j++){
//         str=str+"#";
//         }
//     }
//     else{
//         for(let j=0;j<n;j++){
//             str=str+"*";
//         }
//     }
//     console.log(str);
