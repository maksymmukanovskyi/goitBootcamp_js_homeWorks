//module-04 3:09 PM 2018-06-30
'use strict';
const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};

function Cashier(name = 'name of cashier',productDatabase = 'object'){
    this.name = name;
    this.productDatabase = productDatabase;
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
    this.greet = function(){
        console.log(`Good Afternoon! you served by ${this.name}`);
    };
    this.onSuccess = function(){
        return this.changeAmount > 0 ? console.log(`Thanks for purchase, your change is ${this.changeAmount}`) : console.log(`Thanks for purchase`)
    };
    this.onError = function () {
        console.log(`So Sorry no sufficient amount entered`);
    };
    this.countTotalPrice = function(order){
        return this.totalPrice = order.bread * this.productDatabase.bread;

    };
    this.getCustomerMoney = function (value) {
        return this.customerMoney = value;
    };
    this.countChange = function () {
        if(this.customerMoney >= this.totalPrice){
            return this.changeAmount = this.totalPrice - this.customerMoney;
        }else{
            return this.changeAmount = null;
        }
    };
    this.reset = function () {
        return this.totalPrice, this.customerMoney, this.changeAmount = 0;
    };

}

const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1,
};

const anna = new Cashier('Anna', products);

console.log(anna.name);
console.log(anna.productDatabase);
console.log(anna.totalPrice);
console.log(anna.customerMoney);
console.log(anna.changeAmount);


anna.greet();
anna.countTotalPrice(order);
// console.log(anna.totalPrice);
// anna.getCustomerMoney(300);
// console.log(anna.customerMoney);
//
// const result = anna.countChange();
// console.log(result);
//
// if(result !== null){
//     anna.onSuccess();
// }else{
//     anna.onError();
// }
//
// anna.reset();
//
// console.log(anna.totalPrice);
// console.log(anna.customerMoney);
// console.log(anna.changeAmount);
//
