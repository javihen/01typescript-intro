

export function whatsMyTypes<T>(argumento:T):T {
    return argumento;
}


const var1 = whatsMyTypes('Hola mundo');
const var2 = whatsMyTypes(123);
const var3 = whatsMyTypes([1, 2, 3]);

console.log(var1.concat(' universo'));
console.log(var3.join('-'));