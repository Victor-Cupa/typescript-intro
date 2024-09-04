

export class Person {
    // public name: string;
    // public  address: string;
    // public email: string;

    // constructor(name:string, address:string, email:string){
    //     this.name = name;
    //     this.address = address;
    //     this.email = email;
    // }

    constructor (public name:string, public address:string, public email?:string){

    }
}

// export class Hero extends Person {
    
//     constructor(
//         public alterEgo:string,
//         public age: Number,
//         public realName:string,
//     )
//     {
//         super(
//             realName, 'newyork','VICTOR.CUPA@gmail.com'
//         )
//     }
// };

export class Hero{
    constructor (
        public alterEgo:string,
        public age: Number,
        public realName:string,
        public person:Person,
        
    ){
        
    }
}
const hernoName = new Person('tony','newyyork','VICTOR.CUPA@gmail.');
const ironman = new Hero('IRONMAN', 45, 'tony',hernoName);
console.log (ironman)