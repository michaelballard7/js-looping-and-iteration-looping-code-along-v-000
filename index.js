// Code your solutions in this file

function writeCards(arr, eventName){
    let newArr = new Array();
    for(let i = 0; i<arr.length-1; i++){
        newArr.push(`Thank you, ${arr[i]} for the wonderful ${eventName} gift.`)
    }
    return newArr
}
