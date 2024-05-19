// add whatever parameters you deem necessary - good luck!
function entries(obj){
    let arrs = []
    for (let item in obj) {
        arrs.push([item, obj[item]])
    }
    return arrs
}

let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(entries(obj2))