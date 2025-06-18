/* Funciones simples */
function addNumbers(a:number, b: number) {
    return (a + b);
}

const result: string = addNumbers(1, 2).toString();

console.log({ result })

/* Funciones flecha */
const addNumbersArrow = (a: number, b: number):string => {
    return `${a + b}`;
}

const result2: string = addNumbersArrow(1, 2);

console.log(result2);


/* el primer parametro es obligatorio, 
el segundo no lo es y 
el tercer parametro tiene un valor por defecto */

function multiply(firstNumber:number, secondNumber?:number, base:number=2) {
    return firstNumber * base;
}

const result3: number = multiply(5);

console.log(result3)

/* Creamos la funcion  */

interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}
const healCharacter = ( character:Character, amount:number )=> {
    character.hp += amount;
}

const strider: Character = {
    name:'Strinder',
    hp:50,
    showHp(){
        console.log(`Los puntos de vida son: ${this.hp}`)
    }
}


healCharacter(strider, 50);
strider.showHp();

export { };