import { IsPlayer } from '../../src/interfaces/IsPlayer';
export class Player implements IsPlayer{
    constructor(
        public name: string,
        private age: number,
        readonly country: string,
    ){}

    getProps(){
        return this.age;
    }

    play(){
        console.log(`${this.name} is from ${this.country} is playing!!!`)
    }
}