/*
  Используя массив (users) объектов пользователей, напишите функции которые с помощью
  функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.
*/


/*const users = [
    {
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        phone: '+1 (848) 556-2344',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        phone: '+1 (855) 582-2464',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        phone: '+1 (814) 593-3825',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        id: '249b6175-5c30-44c6-b154-f120923736f5',
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        phone: '+1 (909) 547-2687',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        phone: '+1 (956) 512-2693',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        phone: '+1 (876) 411-2433',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        id: 'e1bf46ab-7168-491e-925e-f01e21394812',
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        phone: '+1 (979) 504-2554',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
];*/

/**
 * Получить массив имен (поле name) всех пользователей
 */
/*
const getAllNames = arr => {
    return arr.map(function(element){
        return element.name;
    });
};

console.log(getAllNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

*/

/**
 * Получить массив объектов пользователей по цвету глаз (поле eyeColor)
 */
/*
const getUsersByEyeColor = (arr, color) => {
    return arr.filter(element => element.eyeColor === color)

};

console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
*/


/**
 * Получить массив имен пользователей по полу (поле gender)
 */
/*
const getUsersByGender = (arr, gender) => {
    return arr.filter(element => element.gender === gender)
};

console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
*/


/**
 * Получить массив только неактивных пользователей (поле isActive)
 */
/*
const getInactiveUsers = arr => {
return arr.filter(element => element.isActive === false)
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
*/


/**
 * Получить пользоваля (не массив) по email (поле email, он уникальный)
 */
/*
const getUserByEmail = (arr, email) => {
    return arr.find(element => element.email === email )
};

console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
*/


/**
 * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
 */
/*
const getUsersWithAge = (arr, min, max) => {
    return arr.filter(element => element.age > min && element.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
*/


/**
 * Получить общую сумму баланса (поле balance) всех пользователей
 */
/*
const getTotalBalance = arr => {
return arr.reduce((acc, val) => acc + val.balance, 0);
};


console.log(getTotalBalance(users)); // 20916

*/

/**
 * Массив имен всех пользователей у которых есть друг с указанным именем
 */
/*
const getUsersByFriend = (arr, name) => {
    return arr.filter(element => element.friends.includes(name)).map(element => element.name);
};

console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

*/


// ---------------------------------------------medium complexity task-----------------------------


/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
*/


/*
 * Получить массив всех скиллов всех пользователей (поле skills), при этом не должно быть
 * повторяющихся скиллов и они должны быть отсортированы в алфавитном порядке
*/


/*const getAllSkills = arr => {
    const userList = arr.map(element => element.skills).reduce((acc,val) => acc.concat(val), []).sort().filter((el, index, arr) => el !== arr[index +1]);
};

console.log(getAllSkills(users));*/
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


/*
 * Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
 */
/*const getUserNamesSortedByFriendsCount = arr => {
 return arr.sort((a,b) => a.friends.length - b.friends.length).map(element => element.name);
};

console.log(getUserNamesSortedByFriendsCount(users));*/
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// ---------------------------------additional tasks---------------------------------------
/*const scientist = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
    {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
    {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
    {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
    {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
    {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
];*/

// 1) отримати масив вчених що народилися в 19 ст
// 2) знайти суму років скільки прожили всі вченні
// 3) Відсортувати вчених по алфавіту
// 4) Відсортувати вчених по даті народження
// 5) Відсортувати вчених по кількості прожитих років
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// 7) Знайти вченого який родився саме пізніше.
// 8) Знайти рік народження Albert Einstein
// 9) Знайти вчених прізвище яких починається на літеру С
// 10) Видалити з масива всіх вчених імя яких починається на A\
// --------------------------- 1 ---------------------------------------

/*const scientistProcessing = arr =>{
    let min = 1801;
    let max = 1899;
    return arr.filter(element => element.year > min && element.year < max).map(names => names.first);
};

console.log(scientistProcessing(scientist));*/
// --------------------------------- 2 -------------------------------------------
/*
const scientistProcessing = arr => {
    return arr.reduce((acc, val) => acc + (val.passed - val.year), 0);
};
console.log(scientistProcessing(scientist));*/
// -------------------------------------- 3 ---------------------------------------

/*
const scientistProcessing = arr => {
    return arr.sort((a,b) => a.first > b.first ? 1:-1 ).map(byNames => byNames.first);
};
console.log(scientistProcessing(scientist));*/
// --------------------------------------------- 4 ----------------------------------------

/*const scientistProcessing = arr => {
    return arr.sort((a,b) => a.year - b.year ).map(byDate => byDate.first);
};
console.log(scientistProcessing(scientist));*/
// ------------------------------------------------ 5 -------------------------------------------------

/*const scientistProcessing = arr => {
    return arr.sort((a,b) => (a.passed - a.year) - (b.passed - b.year) ).map(byDate => byDate.first);
};
console.log(scientistProcessing(scientist));*/
// ---------------------------------------- 6 ---------------------------------------------------
/*const scientistProcessing = arr => {
    return arr.filter(element => element.year <= 1500 || element.year >= 1690 ).map(byDate => byDate.first);
};
console.log(scientistProcessing(scientist));*/
// ---------------------------------------- 7 ---------------------------------------------
/*const scientistProcessing = arr => {
    return arr.map(element => element.year ).sort((a,b) => b - a)[0];
};
console.log(scientistProcessing(scientist));*/
// ------------------------------------------ 8 -----------------------------------------
/*
const scientistProcessing = (arr, name) => {
    return arr.find(element => element.first === name).year;
};
console.log(scientistProcessing(scientist, 'Albert'));*/
// --------------------------------------- 9 ----------------------------------------------
/*const scientistProcessing = (arr, name) => {
    return arr.filter(element => element.last[0] === name).map(el => el.last);
};
console.log(scientistProcessing(scientist, 'C'));*/
// -------------------------------------------- 10 -----------------------------------------
/*const scientistProcessing = (arr, name) => {
    return arr.filter(element => element.first[0] !== name).map(el => el.first);
};
console.log(scientistProcessing(scientist, 'A'));*/
// ------------------------------ this --------------------------------------------------

/*
Написати об'єкт tank який буде мати такі властивості і методи.
1) coordinate 10 координати Х
2)CoordinateY 10 координати по У
3) life 100 здоровя
4) ammunition 5  кількість патронів
5) engineStatus true статус двигуна
6) moveToX(x) рухається до точки х
6) moveToY(у) рухається до точки у
7) fireTo(x, y) стріляє в точку х, у
8) canFire() перевірка чи є патрони
9) checkHealth() перевірка чи є неповне здоров'я
10) heal(x) додає здоровя
11) checkEngine() перевірка статусу двигуна
12) repairEngine() починка двигуна
13) showCoordinate() показує координати танка
14)  name імя гравця
15) color
*/

function Tank(name, coordinateX, coordinateY,color){
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.name =  name;
    this.color = color;
    this.life =  100;
    this.ammunition =  5;
    this.engineStatus = true;
    this.moveToX = function(x) {
        this.coordinateX += x
    };
    this.moveToY = function(y) {
        this.coordinateY += y
    };
    this.fireToXY = function(x, y) {
        this.canFire() ? this.ammunition -= 1 : alert('Reload your gun')
    };
    this.canFire = function() {
        return this.ammunition > 0
    };
    this.checkHelth = function() {
        return this.life > 0 && this.life < 100
    };
    this.heal = function(x) {
        this.checkHelth() ? this.life += x : alert('Pizdets')
    };
    this.checkEngine = function() {
        return this.engineStatus === true
    };
    this.repairEngine = function() {
        this.checkEngine() ? alert('ok') : this.engineStatus = true
    };
    this.showCoordinate = function() {
        return {
            y: this.coordinateY,
            x: this.coordinateX,
        }
    };
};



const tank1 = new Tank('player-1', 10,10,'red');
const tank2 = new Tank('player-2', 20,20,'blue');
const tank3 = new Tank('player-3', 40,40,'red');
const tank4 = new Tank('player-4', 50,50,'red');
const tank5 = new Tank('player-5', 100,100,'red');
tank1.moveToX(10);
tank2.moveToY(50);
console.log(tank1.showCoordinate());
console.log(tank2.showCoordinate());


/*tank.moveToX(20);
tank.moveToX(50);
tank.moveToY(30);
tank.moveToY(40);
tank.moveToY(10);
console.log(tank.showCoordinate());
tank.fireToXY();
tank.fireToXY();
tank.fireToXY();
tank.fireToXY();
tank.fireToXY();
tank.fireToXY();*/
/*
tank.life-=50;
tank.engineStatus =false;
console.log(tank);
tank.repairEngine();
tank.heal(8500);
console.log(tank);
*/


// #1--------------------------CONSTRUCTOR----------------------------

/*
  Напишите код, который бы  с помощью
  функции-конструкора User, позволял создавать
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей,
  необходимо передать как аргументы
  при вызове конструктора.

  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью
  функции getUserInfo вывести строку в консоль.
*/
/*

function User(name,isActive,age,friends){
    this.name = name;
    this.isActive = isActive;
    this.age = age;
    this.friends = friends;
    this.getUserInfo = function(){
        console.log(`User ${name} is ${age} years old and has ${friends} friends.`)
    }
}
const sasha = new User('Sasha', true,25,10);
const petya = new User('Petya', true,90,1);
const kolya = new User('Kolya', true,2,5);
sasha.getUserInfo();
petya.getUserInfo();
kolya.getUserInfo();

*/





// #2-----------------------------------------------------------------------------------------

/*
  Расставьте отсутствующие this
  в методах объекта store
*/
/*
const store = {
    products: ['bread', 'cheese', 'milk', 'apples'],
    managers: ['poly', 'mango', 'ajax'],
    addManager(manager) {
        this.managers.push(manager);

        console.log(this.managers);
    },
    removeManager(manager) {
        const idx = this.managers.indexOf(manager);

        this.managers.splice(idx, 1);

        console.log(this.managers);
    },
    getProducts() {
        console.log(this.products);

        return this.products;
    }
};

store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

store.removeManager('mango'); // ['poly', ajax', 'chelsey']

store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']*/

// #3------------------------------------------------------------------------------

/*
  Расставьте отсутствующие this в конструкторе объектов Account
*/
/*
function Account({ login, password, type = "regular" }) {
    this.login = login;
    this.password = password;
    this.type = type;

    this.changePassword = function(newPassword) {
        password = newPassword;

        return password;
    };

    this.getAccountInfo = function() {
        return(`
      Login: ${login}, 
      Pass: ${password}, 
      Type: ${type}
    `);

    };
}

const account = new Account({
    login: "Mango",
    password: "qwe123",
    type: "premium"
});

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

console.log(account.changePassword("asdzxc")); // 'asdzxc'

console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'*/
