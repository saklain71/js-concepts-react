const products = [
    {name: 'laptop', price : 3200, brand:'lenevo', color: 'silver'},
    {name: 'phone', price : 7000, brand:'lenevo', color: 'silver'},
    {name: 'watch', price : 3000, brand:'lenevo', color: 'yellow'},
    {name: 'camera', price : 300, brand:'lenevo', color: 'gray'}
];

// const brands = products.map(product => product.brand);
// console.log(brands);

//filter
const cheap = products.filter(product => product.price <= 3000);
console.log(cheap);
const specificName = products.filter(p=> p.name.includes('phone'));
console.log(specificName);
const special = products.find(p=>p.name.includes('n'));
console.log(special);