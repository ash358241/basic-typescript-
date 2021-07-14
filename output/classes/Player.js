export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getProps() {
        return this.age;
    }
    play() {
        console.log(`${this.name} is from ${this.country} is playing!!!`);
    }
}
