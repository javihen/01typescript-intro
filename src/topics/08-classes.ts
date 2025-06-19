
class Person {
    public name: string;
    private address: string;

    constructor() {
        this.name = 'Javier';
        this.address = 'La paz';
    }
}


const ironman = new Person();

console.log(ironman);