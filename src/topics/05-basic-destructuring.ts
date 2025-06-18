/* Nos creamos la interface principal */
interface AudioPlayer{
    audioVolumen: number;
    songDuration:number;
    song:string;
    details: Details;
}

/* Nos creamos la subinterface para usarla en la
interfaz principal */
interface Details{
    author:string;
    year:number;
}

/* Nos creamos un objeto */
const audioPlayer:AudioPlayer={
    audioVolumen:90,
    songDuration:36,
    song:"Mess",
    details:{
        author: 'Ed Sheeran',
        year:2015
    }
}

const song = 'New Song';

console.log('Song: ',audioPlayer.song);
console.log('Author: ',audioPlayer.details.author);

export{};