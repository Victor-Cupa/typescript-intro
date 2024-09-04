import {Product, taxCalculation} from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Laptop',
        price: 1000,
    },
    {
        description: 'Mouse',
        price: 250,
    },
];

const [total, tax] = taxCalculation ({
    products: shoppingCart,
    tax:0.19
});

console.log('Total:', total);
console.log('Tax:', tax);