class Character {
    life = 1;
    attack = 0;
    defense = 0;
    maxLife = 1;

    constructor(name) {
        this.name = name;
    }

    life(newlife) {
        this.life = newlife < 0 ? 0 : newlife;
    }
}


class knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}
class LittleMonster extends Character {
    constructor(name)  {
        super(name);
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {
    constructor(name)  {
        super(name);
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}


class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
     }

    start() {
        this.update();

        this.fighter1E1.querySelector('.attackbutton').addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2E1.querySelector('.attackButton').addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1))
    }

    update() {
        // Fighter 1
        this.fighter1E1.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1E1.querySelector(".bar").style.width = `${f1Pct}%`;
        // Fighter 2
        this.fighter2E.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`;
    }

    doAttack(attacking, attacked) {
        console.log(`${attacking.name} esta atacando ${attacked.name}`);
        
        this.update();
    }
}