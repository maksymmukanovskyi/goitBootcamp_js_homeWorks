//module-06 7:14 PM 2018-07-03
'use strict';
class Hamburger {
    constructor(size, stuffing) {
        this._size = size;
        this._stuffing = stuffing;
        this._topping = [];
    }

    get productSize(){
        return this._size;
    }
    get productStuffing(){
        return this._stuffing;
    }
    get productTopping(){
        return this._topping;
    }


    addTopping(topping) {
        if (!this.productTopping.includes(topping)) {
            this.productTopping.push(topping);
        } else {
            alert(`This topping already exist in your order!`)
        }
    }

    removeTopping(topping) {
        if (this.productTopping.includes(topping)) {
            this.productTopping.filter(function (element) {
                if (element !== topping) {
                    return element;
                }
            })
        } else {
            alert(`Sorry this topping do not exist to delete`)
        }
    }

    getToppings() {
        return this.productTopping;
    }


    getSize() {
        return this.productSize;
    }

    getStuffing() {
        return this.productStuffing;
    }

    calculatePrice() {
        let priceTotal1 =  Hamburger.SIZES[this.productSize].price + Hamburger.STUFFINGS[this.productStuffing].price;
        let priceTotal2 =  this.productTopping.map((el) => Hamburger.TOPPINGS[el].price ).reduce((acc,el) => acc + el, 0);
         return priceTotal1 + priceTotal2;


    }
    calculateCalories() {
        let caloriesTotal1 =  Hamburger.SIZES[this.productSize].calories + Hamburger.STUFFINGS[this.productStuffing].calories;
        let caloriesTotal2 =  this.productTopping.map((el) => Hamburger.TOPPINGS[el].calories ).reduce((acc,el) => acc + el, 0);
        return caloriesTotal1 + caloriesTotal2;
    }


}


// --------------------------------------------------- SIZES -----------------
Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        price: 30,
        calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 100,
    },
};

// --------------------------------------------------- STUFFING --------------

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';


Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20,
    },

    [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5,
    },

    [Hamburger.STUFFING_MEAT]: {
        price: 35,
        calories: 15,
    },
};
// --------------------------------------------------- TOPPING ---------------

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0,
    },

    [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 5,
    },
};
 let  bulka = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);
console.log(bulka);
bulka.addTopping(Hamburger.TOPPING_SAUCE);
console.log(bulka.calculatePrice());
console.log(bulka.calculateCalories());

// Маленький гамбургер с начинкой из сыра
let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log(hamburger.calculateCalories());

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log(hamburger);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1
