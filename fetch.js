const student ={
    name: 'saklain mustak',
    age: 32,
    movies: ['king khan', 'Dhakar Polaw']
}

const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson);
const studentObj = JSON.parse(studentJson);
console.log(studentObj);
// fetch
//keys values
const keys = Object.keys(student);
const values = Object.values(student);
//for

//add or remove from an object
const products = [
    {name: 'laptop', price : 3200, brand:'lenevo', color: 'silver'},
    {name: 'phone', price : 7000, brand:'lenevo', color: 'silver'},
    {name: 'watch', price : 3000, brand:'lenevo', color: 'yellow'},
    {name: 'camera', price : 300, brand:'lenevo', color: 'gray'}
];

const newPrduct = {name: 'webcam',price: 700, brand:'lal'}
//copy products array and then add new products 

const newProducts = [...products, newPrduct];
console.log(newProducts);
// create a new array without one specific item
// remove phone means create a new array without the phone

const remaining = products.filter(p =>p.name !== 'phone');
console.log(remaining);