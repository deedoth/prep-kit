// add whatever parameters you deem necessary - good luck!
function findTheDuplicate(arr){
    return arr.every(item => item++ ? item : undefined)
}

console.log(findTheDuplicate([1,2,1,4,3,12]))