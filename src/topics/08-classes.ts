
export class Person {

    constructor(
        public firstName: string,
        public lastName:string,
        private address: string = 'No Address') {
        
    }
}


export class Hero{

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person:Person,
    ) {
        
    }
}

const tony = new Person('Tony','Stark', 'New york')
const ironman = new Hero('Ironman',50,'tony', tony);

console.log(ironman);