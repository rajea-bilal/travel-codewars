// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function singleVal(arr) {

    let descend = arr.sort((a, b) => b - a)
     
    // return descend
     
     let newArr = []
     
     for(let i = 0; i < descend.length; i++) {
       
       newArr.push(descend[i] - descend[i + 1])
     }
     newArr.pop()
     
     let sum = newArr.reduce((acc, current) => {
       acc = acc + current
       return acc
     }, 0)
     
    return sum
     
   }
   
   console.log(singleVal([-3, -2, -1]))
   
   