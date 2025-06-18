

/* Cuando creamos un arreglo podemos guardar tanto varios tipos de datos */
let skills:string[] = ['bash', 'counter', 'healign'];

interface Character {
    name: string,
    hp: number,
    skills: string[],
    /* El hometown puede o no puede estar en la interface */
    hometown?:string
}


const striders: Character = {
    name: 'Strider',
    hp: 100,
    skills:['bash']
}

/* podemos crearnos tb objetos dela siguiente forma */
const strider = {
    name: 'streider',
    hp: 100,
    skills:['bash','counter']
}

striders.hometown = 'Rivendell';

console.table(striders);

export { };