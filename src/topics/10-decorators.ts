
function decoration(constructor: any) {
}

export class SuperClass{
    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola mundo');
    }
}

console.log(SuperClass);

const obj = new SuperClass();

console.log(obj);