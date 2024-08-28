
interface superHero{
    name: string,
    age: number,
    address: {
        street: string,
        country: string,
        city: string,
    }

}


const superHero ={
    name: 'Superman',
    age: 30,
    address:{
        street: 'Maine',
        country: 'USA',
        city: 'New York'
    }, 
    showAddress () {
        return `${this.name}, ${this.address.country} , ${this.address.city}`;
    }
}

const address = superHero.showAddress();
console.log(address);

//********** person interface */

interface personaInfo{
    name:string,
    lastname: string,
    age: number,
    phone: number,
    address: Address,
    email: string,
    showInfo :()=>string
}

interface Address{
        country: string,
        city: string,
        street: string,
}


const personInfo:personaInfo ={
    name: 'victor',
    lastname: 'cupa',
    age: 33,
    phone:3134662785,
    email: 'victor.cupa@gmail.com',
    address: {
        country: 'Colombia',
        city: 'Madrid',
        street:'Calle 123',
    },

    showInfo () {
        return `${this.name} ${this.lastname} is ${this.age}years old, he live in ${this.address.country} in the ${this.address.city} city, street ${this.address.street}. Contact phone ${this.phone} and your email is: ${this.email} `
    }
}

const showInforPerson = personInfo.showInfo();
console.log(showInforPerson);
export {}