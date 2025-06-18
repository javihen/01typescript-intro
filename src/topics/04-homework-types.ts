
interface SuperHero{
    name: string;
    age: number;
    address: Address
    /* tanto podemos hacer cualquiera de estos dos para definir las funciones
     dentro de la interface */
    showAddress(): string;
    showAddress: () => string;
}

/* Es mejor separar de todo el objeto para no tener problemas */
interface Address {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad:'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}

const address = superHeroe.showAddress();
console.log(address);