
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


// funciones

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const heaalCharacter = (character:Character, amount:number) => {

    character.hp += amount;
    
}

const strider: Character = {
    name: 'strider',
    hp:50,
    showHp (){
        console.log (`puntos de vida ${this.hp}`);
    },
}
heaalCharacter(strider, 100)
strider.showHp();

export {}