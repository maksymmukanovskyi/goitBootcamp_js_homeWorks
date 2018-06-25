// Написати функцію яка питає користувача яку валюту він має і в яку хоче перевести
// вказує суму і на основі курса виводиться готова сума.
// UAH, EUR, USD

// 1)Запит яку валюту має
// 2)Запит в яку валюту хоче перевести
// 3)Запит яка сума для конвертації
// 4) В замиканні зберегти 6 курсів валют
// 5) 6 перевірок в залежності від валют виводити кінцпеву суму
// 6) Перетворити введену валюту до єдиного формату
// 7) Перевірка на ціле і додатнє число.
//8 ) alert вивести суму яку він отримає.

let convFrom = prompt('Currency you want to exchange? ex... UAH').toLowerCase();
let convTo = prompt('Currency you want to exchange to? ex... USD').toLowerCase();
let amount = prompt('Amount to convert');
function currencyExchange() {
    const UAH_USD = 0.04;
    const UAH_EUR = 0.03;
    const EUR_UAH = 30.6;
    const EUR_USD = 1.2;
    const USD_UAH = 50;
    const USD_EUR = 0.8;

    function calcResult(from, to, sum){
        if(from === 'uah' && to === 'usd'){
            return sum * UAH_USD
        }else if(from === 'usd' && to === 'uah'){
            return sum * USD_UAH
        }else if(from === 'uah' && to === 'eur'){
            return sum * UAH_EUR
        }else if(from === 'eur' && to === 'uah'){
            return sum * EUR_UAH
        }else if(from === 'eur' && to === 'usd'){
            return sum * EUR_USD
        }else if(from === 'usd' && to === 'eur'){
            return sum * USD_EUR
        }
    }
    return calcResult;
}
if(convFrom === null || !isNaN(convFrom) || convFrom === ''){
    alert('Please try again 1');
} else if (convTo === null || !isNaN(convTo) || convTo === ''){
    alert('Please try again 2');
} else if(amount === null || isNaN(amount) || amount === '' || amount < 0 || !Number.isInteger(+amount)){
    alert('Please try again 3');
}else {
    let exchange = currencyExchange();
    alert(`congratulation! you have exchanged your amount: (${exchange(convFrom, convTo, amount)}) `);
}