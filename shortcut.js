// 'name',5, true,{},[]
// '', 0, false, null , undefined

// chech truthy

let myVar = 500;
if(myVar){
    myVar = myVar*100;
}else{
    myVar = 0;
}
// check falsy
let money = 50;
if(!money){
}
const myMoney = 800 ;
let food ;
if(myMoney > 100){
    food = 'biryani';
}else{
    food = 'cha biscuit';
}

// ternary
let food1 = money > 100 ? 'biryani':'biscuit';
console.log(food1);


let drink = (money >100 && myVar >100) ?'coke': ' filter water';
console.log(drink);

// number to string
const num1 = 52;
const numString = num1 + '';
console.log(numString);
console.log(typeof(numString));


// 
let isActive = true;
const showUser = ()=> console.log('display user');
const hideUser = () => console.log('hide user');
// isActive? showUser() : hideUser();
// use && if left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then the right side ll be executed
isActive || showUser();
// toggle boolean
isActive = !isActive