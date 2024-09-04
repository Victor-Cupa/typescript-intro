
function classDecorator(constructor: any){
    
    return class extends constructor{
        newProperty = ' new property';
        hello ='override';
    }
}


@classDecorator
export class superClass{
    public myProperty: string = 'abc123';

    print (){
        console.log('hello world');
    }
}

console.log (superClass);

const myClass = new superClass();
console.log (myClass);