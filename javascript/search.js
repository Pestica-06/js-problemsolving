
///binary search

// arr = new Array(2, 3, 4, 10, 40);
// x = 10;
// n = arr.length;
// result = binarySearch(arr, x);
// if (result == -1)
//     console.log("Element is not present in array")
//     else
//     {
//         console.log("Element is present at index "+ result);
//     }




//binary
// Program to implement iterative Binary Search

// A iterative binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1

// function binarySearch(arr, x)
// {
//     let low = 0;
//     let high = arr.length - 1;
//     let mid;
//     while (high >= low) {
//         mid = low + Math.floor((high - low) / 2);

//         // If the element is present at the middle
//         // itself
//         if (arr[mid] == x)
//             return mid;

//         // If element is smaller than mid, then
//         // it can only be present in left subarray
//         if (arr[mid] > x)
//             high = mid - 1;

//         // Else the element can only be present
//         // in right subarray
//         else
//             low = mid + 1;
//     }

//     // We reach here when element is not
//     // present in array
//     return -1;
// }





//binary search
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
    
//     while (left < right) {  
//       let mid = Math.floor((left + right) / 2);
      
//       if (arr[mid] === target) {
//         return mid;
//       } else if (arr[mid] <= target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
    
//     return -1;  
//   }
//   console.log(binarySearch([10,20,30,40], 10));



// function binarySearch(arr, x){
//     let low = 0;
//     let high = arr.length - 1;
//     let mid;
//     while (high >= low) {
//         mid = low + Math.floor((high - low) / 2);
//         if (arr[mid] == x)
//             return mid;
//         if (arr[mid] > x)
//             high = mid - 1;
//         else
//             low = mid + 1;
//     }
//     return -1;
// }
// result = binarySearch([2, 3, 4, 10, 40], 2);
// if (result == -1)
//     console.log(-1)
//     else
//     {
//         console.log("Element is present at index "
//                     + result);
//     }


