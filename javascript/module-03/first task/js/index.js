// 1) Написати функцію sliceElement() що вирізає з массива третій елемент
// 2) Написати функцію checkExist() що перевіряє чи є цей вирізаний елемент в базі
// 3) Якщо його немає додати його, якщо є нічого не робити addNumber()

let dataBase = [5, 10, 25, 68, 75, 43];
let workArr = [10, 20, 30, 40];

function spliceElement(arr, position) {       //--------------------------cut
    return arr.splice(position, 1)[0];
}

function checkExist(arr, number){
    return arr.includes(number);                 //---------------------check
}

function addNumber(arr){
    let result = spliceElement(workArr, 2);
    if(!checkExist(arr, result)){
        arr.push(result)
    }
}

addNumber(dataBase);
console.log(dataBase);

console.log(spliceElement(workArr,2));
console.log(workArr);