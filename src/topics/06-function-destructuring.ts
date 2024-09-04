
export interface Product {
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


 export function taxCalculation (options: TaxCalculationOptions): [number,number]{

        let total = 0;
        options.products.forEach(({price}) => {
            total += price;
        });
        return [total , total * options.tax];
}


const shoppingcart = [phone, tablet];
const tax = 0.19;

const [total, totalTax] = taxCalculation({
    products: shoppingcart,
    tax,

})

console.log('total', total);
console.log('tax', totalTax);
