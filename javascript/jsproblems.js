let n=5;
str="";
    for(let j=1;j<5;j++){
        str=str+j+" ";
        console.log(str);
    }


for(let i=0;i<n;i++){
    str="";
    for(let j=5;j>0;j--){
        str=str+"*"+" ";
    }
    console.log(str);
   
}



for(let i=0;i<n;i++){
    str="";
    for(let j=n;j>i;j--){
        str=str+"*"+" ";
    }
    console.log(str);
}


for(let i=0;i<n;i++){  
    str="";
    let gap="";
    for(let k=n;k>n-i;k--){
        gap=gap+" ";
    }
    for(let j=n;j>i;j--){
        str=str+"*"+" ";
    }
    console.log(gap+str);
}



for(let i=0;i<n;i++){
    str="";
    let gap="";
    for(let k=n-i;k<n;k++){
        gap=gap+" ";
    }
    for(let j=n;j>i;j--){
        str=str+"*"+" ";
    }
    console.log(gap+str);
}



for(let i=0;i<n;i++){
    str="";
    let gap="";
    for(let k=0;k<i;k++){
        gap=gap+" ";
    }
    for(let j=i;j<n;j++){
        str=str+"*"+" ";
    }
    console.log(gap+str);
}




for(let i=0;i<n;i++){
    let str="";
    for(let j=1;j<i+1;j++){
        str=str+j+" ";
    }
    console.log(str);
}




for(let i=0;i<n;i++){
    str="";
    for(let j=1;j<i+2;j++){
        str=str+j+" ";
    }
    console.log(str);
}





let variable=1;
for(let i=0;i<n;i++){
    let str="";
 for(let j=0;j<i+1;j++){
    str=str+variable+" ";
    variable++;
 }
 console.log(str);
}


for(let i=0;i<n;i++){
    str="";
    for(let j=5;j>i;j--){
        str=str+j+" ";
    }
    console.log(str);
}


for(let i=n;i>0;i--){
  let  str="";
    for(let j=1;j<i;j++){
        str=str+j+" ";
    }
    console.log(str);
}

for(let i=0;i<n;i++){
    str="";
    for(let j=0;j<n;j++){
        str=str+"*"+" ";
    }
    console.log(str);
}


for(let i=0;i<n;i++){
    str="";
    for(let j=0;j<i+1;j++){
        str=str+"*"+" ";
    }
    console.log(str);
}


for(let i=0;i<n;i++){
    str="";
    gap="";
    for(let j=0;j<i+1;j++){
        str=str+"*"+" ";
    }
    for(let k=n-1;k>0;k--){
      gap=gap+" ";
    }
    n--;
    console.log(gap+str);
}


for(let i=0;i<n;i++){
    str="";
    gap="";
    for(let j=0;j<i+1;j++){
        str=str+"*"+" ";
    }
    for(let k=1;k<n-i;k++){
      gap=gap+" ";
    }
    console.log(gap+str);
}



for(let i=0;i<n;i++){
    str="";
   
    for(let j=0;j<i+1;j++){
        str=str+"*"+" ";
    }
    gap="";
    for(let k=n-1-i;k>0;k--){
        gap=gap+" ";
    }
    console.log(gap+str);
  
}



for(let i=n;i>0;i--){
    str="";
    for(let j = 1; j <= n- 1; j++){
     str=str+"*"+" ";
    }
    console.log(str);
}




function gcd(a, b) {
    let temp = 0;
    let c = (a < b) ? a : b;  

    for (let i = c; i > 0; i--) {
        if (a % i === 0 && b % i === 0) {
            temp = i;
            break;
        }
    }
    console.log("GCD: " + temp);
}

gcd(30, 12);



for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            row += i + ' ';
        } else {
            row += '  ';  // Two spaces
        }
    }
    console.log(row);
}


let m = 9;
let k= 10;
let outputStr = "";
for(let i = m; i <= k; i++) {
    // Given a number whether 
    // check whether is is prime or not
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if(i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime && outputStr === "") {
        outputStr = outputStr + i;
    }
    else if(isPrime) {
        outputStr =  outputStr + ", " + i;
    }
    else {
        continue;
    }
}
console.log(outputStr);
// if the number is a prime append to the output



function printPattern() {
    let n = 3; // Number of rows for the top half of the pattern
  
    // Loop for the top half of the pattern
    for (let i = 1; i <= n; i++) {
      let row = "";
      
      // Add leading spaces
      for (let j = 1; j <= n - i; j++) {
        row += " ";
      }
      
      // Add numbers 1 to i
      for (let k = 1; k <= i; k++) {
        row += k + " ";
      }
  
      console.log(row); // Print the row as is
    }
  
    // Loop for the bottom half of the pattern
    for (let i = n - 1; i >= 1; i--) {
      let row = "";
      
      // Add leading spaces
      for (let j = 1; j <= n - i; j++) {
        row += " ";
      }
      
      // Add numbers 1 to i
      for (let k = 1; k <= i; k++) {
        row += k + " ";
      }
  
      console.log(row); // Print the row as is
    }
  }
  
  printPattern();


  function factorial(n){
    if (n==0 || n==1) {
        return 1;
    }
    let res=1;
    let sum=0;
    for(let i=1;i<=n;i++){
        res *=i;
        sum+=res;
    }
    console.log(sum);
}
factorial(3);










