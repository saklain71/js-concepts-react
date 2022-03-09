//array destructuring
numbers = [4, 5];
const [x, y ] = numbers;
 function boxify(num1, num2){
     const num = [num1, num2]
     return num;
 }

 const [a, b ]= boxify(6, 8);
const student ={
    name: 'saklain mustak',
    age: 32,
    movies: ['king khan', 'Dhakar Polaw']
}


const [firstMovie,secondMovie] = student.movies;

// object destructuring
const employee = {
    ide: 'VS Code',
    machine: 'Developer',
    machine: 'mac',
    language:['html','css','js'],
    specification:{
        height:66,
        weight:67,
        addreee:'kumarkhali',
        watch:{
            color:'black',
            price: 500,
            brand:'garmin'
        }
    }
}

const {machine, ide} = employee; 
const {weight, height} = employee.specification;
// optional chaining
const {brand} = employee?.specification?.watch;