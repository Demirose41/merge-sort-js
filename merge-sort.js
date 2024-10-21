// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if(arr.length <= 1) return arr;
  if(arr.length === 2){
    return arr[0] > arr[1] ? [arr[1], arr[0]] : [arr[0], arr[1]]
  }
  let leftHalf = [];
  let rightHalf = [];
  let middle = Math.floor(arr.length / 2)
  // Divide the array in half
  for(let i = 0; i < middle; i++){
    leftHalf.push(arr[i]);
  }
  for(let i = middle; i < arr.length; i++){
    rightHalf.push(arr[i])
  }
  // Recursively sort the left half
  leftHalf = mergeSort(leftHalf)
  // Recursively sort the right half
  rightHalf = mergeSort(rightHalf)

  // Merge the halves together and return
  return merge(leftHalf, rightHalf)
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  if (arrA.length === 0) return arrB 
  if (arrB.length === 0) return arrA 
  // Create an empty return array
  let result = [];
  // Point to the first value of each array
  let index1 = 0;
  let index2 = 0;
  // While there are still values in each array...
  while(arrA.length > index1 || arrB.length > index2){
    // Compare the first values of each array
    if(arrA[index1] < arrB[index2]){
      // Add the smaller value to the return array
      result.push(arrA[index1]);
      // Move the pointer to the next value in that array
      index1++;
    }else{
      result.push(arrB[index2]);
      index2++;
    }
  }
  if(arrA.length == index1 && arrB.length != index2){
    result = [...result, ...arrB]
  }
  if(arrA.length != index1 && arrB.length == index2){
    result = [...result, ...arrA]
  }

  // Return the return array
  return result;
}

module.exports = [merge, mergeSort];

