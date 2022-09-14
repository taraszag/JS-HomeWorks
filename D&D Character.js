
const abilityModifier = (constitution) => {
    if (constitution <= 2) {
        throw 'Ability scores must be at least 3'
    };
    if (constitution > 18) {
        throw 'Ability scores can be at most 18'
    }
    let constModifier = constitution - 10
    return Math.floor(constModifier / 2)
};

function RollDice (){
    return Math.floor(Math.random() * 6)+1
}

function removeLowestNumber(arr) {
    return arr.sort().shift()
  }
  


class Character {

    constructor() {
        this._strength = Character.rollAbility()
        this._dexterity = Character.rollAbility()
        this._constitution = Character.rollAbility()
        this._intelligence = Character.rollAbility()
        this._wisdom = Character.rollAbility()
        this._charisma = Character.rollAbility()
        this._hitpoints = 10 + abilityModifier(this._constitution)
    }

    static rollAbility() {
        let arr = []
        for (let i = 0; i < 4; i++) {
            arr.push(RollDice())
        }
        removeLowestNumber(arr)

        const sum = arr.reduce(function (a, b) {
            return a + b;
        })
        return sum
    }


    get strength() {
        return this._strength
    }

    get dexterity() {
        return this._dexterity
    }


    get constitution() {
        return this._constitution
    }

    get intelligence() {
        return this._intelligence
    }

    get wisdom() {
        return this._wisdom
    }

    get charisma() {
        return this._charisma
    }

    get hitpoints() {
        return this._hitpoints
    }
}

const Drizzt = new Character()

console.log(Drizzt.strength)
console.log(Drizzt.dexterity)
console.log(Drizzt.constitution)
console.log(Drizzt.intelligence)
console.log(Drizzt.wisdom)
console.log(Drizzt.charisma)
console.log(Drizzt.hitpoints)

console.log(abilityModifier(3))
console.log(Drizzt.strength)
console.log(Drizzt.strength)

let arr = []
        for (let i = 0; i < 4; i++) {
            arr.push(Math.floor(Math.random() * (7 - 1)) + 1)
        }
        arr.sort().shift()
        console.log(arr)

console.log([])