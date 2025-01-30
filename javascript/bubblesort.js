// function bubbleSort(arr) {
//     let n = arr.length; // Get the length of the array
    
//     // Outer loop to control the number of passes
//     for (let i = 0; i < n - 1; i++) {
//         // Inner loop to compare adjacent elements
//         for (let j = 0; j < n - i - 1; j++) {
//             // Compare the current element with the next element
//             if (arr[j] > arr[j + 1]) {
//                 // Swap the elements if they are in the wrong order
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
    
//     return arr; // Return the sorted array
// }

// // Test the function
// let numbers = [5, 2, 9, 1, 5, 6];
// console.log("Unsorted Array:", numbers);
// let sortedNumbers = bubbleSort(numbers);
// console.log("Sorted Array:", sortedNumbers);



// //bubble sort
// function bubblesort(arr){
//     let count=1
//         while(count>0){
//             count=0
//             for(let i=0;i<arr.length;i++){
//                 if (arr[i]>arr[i+1]){
//                     let  temp=arr[i]
//                     arr[i]=arr[i+1]
//                     arr[i+1]=temp
//                     count++
//                 }
//             }
//         }
//         console.log(arr);
//     }
//     bubblesort([5,10,2,3,1,4])