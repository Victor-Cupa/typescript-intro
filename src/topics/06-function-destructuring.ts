
interface Product {
    description: string;
    price: number;
}

const phone: Product ={
    description: 'Nokia A1',
    price: 200,
}

const tablet: Product ={
    description: 'iPad Pro',
    price: 600,
};

interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}


function taxCalculation (options: TaxCalculationOptions): number []{

        let total = 0;
        options.products.forEach(product => {
            total += product.price;
        });
        return [total , total * options.tax];
}


const shoppingcart = [phone, tablet];
const tax = 0.19;

const result = taxCalculation({
    products: shoppingcart,
    tax,

})

console.log('total', result[0]);
console.log('tax', result[1]);
export {}