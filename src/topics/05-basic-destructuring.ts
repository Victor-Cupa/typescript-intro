
interface AduioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AduioPlayer = {
    audioVolume: 10,
    songDuration: 360,
    song: "The eye of the tiegger",
    details:{
        author: "Frank",
        year: 2021,
    }
}
//* desestructuracion 

const {song} = audioPlayer;
const {author} = audioPlayer.details;
// console.log(`song: ${song}`);
// console.log(`author: ${author}`);


// desestructuracion de arreglos

//const dbz: string[] = ['GOKU', 'VEGETA', 'TRUNKS'];
const [, , trunks ='not found']: string[] = ['GOKU', 'VEGETA'];

console.log('personaje 3 DBZ', trunks);
export {}