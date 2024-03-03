//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}
	get species() {
        return this._species;
    }
	makeSound(){
		return `The ${this.species} makes a sound`;
	}
}

class Cat extends Animal {
    constructor(species) {
        super(species);
    }

    purr() {
        console.log(`The ${this.species} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(species) {
        super(species);
    }

    bark() {
        console.log(`The ${this.species} makes a sound`);
    }
}


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
