import { Passenger } from './11-optional-chaining';


export interface Passenger{
    name:string;
    lastName:string;
    children?: string [];
}
const passenger1: Passenger ={
    name: 'jhon',
    lastName: 'Wick',

}

const passenger2: Passenger = {
    name: 'Maria',
    lastName: 'Smith',
    children: ['Jane', 'John'],
}

const printChildren = (passenger:Passenger) => {
    const howManyChildren = passenger.children?.length || 0;// aqui valido si es que existen elementos dentro de children
    console.log(passenger.name, howManyChildren);
};

printChildren(passenger1);
printChildren(passenger2);