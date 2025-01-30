// function countOccurrences(s1, s2) {
//     let count = 0;

//     for (let i = 0; i <= s1.length - s2.length; i++) {
//         let match = true;

//         for (let j = 0; j < s2.length; j++) {
//             if (s1[i + j] !== s2[j]) {
//                 match = false;
//                 break;
//             }
//         }

//         if (match) {
//             count++;
//         }
//     }

//     return count;
// }

// // Example usage
// let s1 = "This is a String";
// let s2 = "is";
// let result = countOccurrences(s1, s2);
// console.log("Number of occurrences:", result);







//Count the number of occurrences of a string s2 in a string s1. For example s1 = "This is a String" s2 = "is", number of occurences is 2.
// function countOccurence(s1,s2){
//     let count=0;
//     let pos=0;
//     while((pos=s1.indexOf(s2,pos)) !=-1){
//        count++;
//        pos+=s2.length;
//     }
//     return count;
//    }
//    const s1 = "My name is narnia";
//    const s2 = "na";
//    const count = countOccurence(s1,s2);
//    console.log(`${count}`);



// let str1="this is awesome"
// let str2="is"
// let check=str1.split("");
// let arr=str1[0];
// for(let i=0;i<check.length;i++){
//     if(arr[i]==str2){
//         console.log("yes")
//     }
//     else{
//         console.log("no")
//     }
// }



// let str="hello everyone"
// let rel="";
// for(let i=str.length-1;i>=0;i--){
//     rel=rel+str[i];
// }
// console.log(rel);



// function concatstrings(str1,str2){
//     let string=str1+str2;
//     return string;
// }
// let string=concatstrings("pesti","ca");
// console.log(string);



// function removedigit(str){
//     let result=str.slice(-4,-6);
//     return result;
// }
// console.log(removedigit("hello world !"));





// function length(str){
//     let result=str.length;
//     return result;
// }
// console.log(length("hello"));

// let num=123;
// let number=5;
// console.log(num.toString()+number);



// let fname= "pesti";
// let sname= "ca";
// console.log(fname+sname);

// console.log(`she said,\"Java is Awesome"`);
// text=33;

// let i = 1;




// str="hello";
// console.log(str.slice(0,str.length-2));

// let we=["pestica","Hussain","Udhaya","sam"]
// console.log(we[2]);

// for(i=-we.length;;i){
//     console.log(we[i]);
// }



// function displaygreeting(name){
//     console.log("hello"+name+"!");
// }
// displaygreeting("Pestica");


// function getrandomnum(){
//     let result= math.floor(math.random()*1);
//     return result;
// }






// function isvowel(letter){
// if(letter=="a"||letter=="A"){
//     console.log( letter+"is vowel");
// }

// else if(letter=="e"||letter=="E"){
//     console.log( letter+"is vowel");
// }
// else if(letter=="i"||letter=="I"){
//     console.log( letter+"is vowel");
// }

// else if(letter=="o"||letter=="O"){
//     console.log( letter+"is vowel");
// }

// else if(letter=="u"||letter=="U"){
//     console.log( letter+"is vowel");
// }

// else{
//     console.log("This letter is not a vowel");
// }

// }
// isvowel("e");