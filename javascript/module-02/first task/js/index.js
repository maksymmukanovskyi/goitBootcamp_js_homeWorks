let arrNumbers = [];
let numbers = 0;
do{
    numbers = prompt('Type your number');
    if(!isNaN(numbers) && numbers!==null && numbers!=='')
    arrNumbers.push(+numbers);
}
while(!isNaN(numbers) && numbers!==null);
for(let elm of arrNumbers){
    if(arrNumbers.length!==0){
        numbers+=elm;
    }

}
console.log(numbers);
console.log(arrNumbers);
alert(`total numbers${numbers}`);
