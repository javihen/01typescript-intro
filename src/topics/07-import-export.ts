import { type Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product = [
    {
        description: 'Nokia A',
        price:150.0
    },
    {
        description: 'Tablet T',
        price:250.4
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax:0.15
});

console.log('Total ', total);
console.log('Tax ', tax);