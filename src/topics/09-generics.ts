
export function whatsMyType <T>(argument: T):T{
    return argument
}

const amIString = whatsMyType <string>('HELLO WORLD');
const amINumber = whatsMyType <number>(120.565);
const amIArray = whatsMyType <number []>([1,2,3,4,5]);

console.log(`I'M STRING ${amIString.split(' ')}`);
console.log(`I'M NUMBER ${amINumber.toFixed ()}`);
console.log(`I'M ARRAY ${amIArray.join('-')}`);
