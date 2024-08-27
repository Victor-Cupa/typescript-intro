
function addNumbers (a:number, b: number){
    return a + b;
}

const result:number = addNumbers(1,2);
console.log({result});


// arrow functions o funcion flecha

const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
};

const result2 = addNumbersArrow(4,4);
console.log({result2});


// multiply functions

function multiply (firstnumber:number, secondnumber?:number, base:number = 6){
    return firstnumber * base;
}
const multiplyResult = multiply(4);
console.log({multiplyResult});
export {}