

const skills: string [] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string [];
    hometown?: string;
}
const strider: Character = {
    name: 'strider',
    hp: 150,
    skills: ['Bash', 'Counter'],
    hometown:
    'Dragonstone',
}
 strider.hometown ='bogota'
console.table(strider);
export {}