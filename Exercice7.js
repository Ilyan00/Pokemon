"use strict"

class pokemon {
    constructor(name,attack,defense,hp,luck)
    {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck   
    };

    IsLucky()
    {
        return Math.random() < this.luck;
    };

    AttackPokemon(pokemon)
    {
        if (this.IsLucky())
        {
            let degat = this.attack - pokemon.defense;
            pokemon.hp -= degat;
            console.log(`${this.name} a fait ${degat} dégâts à ${pokemon.name}`);
        }
        else
        {
            console.log(`${this.name} a raté son coup`);
        };
    };

}

let pickachue = new pokemon("pickachue",15,5,40,0.5);
let bulbizarre = new pokemon("bulbizarre",20,10,50,0.7);
while (pickachue.hp != 0 && bulbizarre.hp != 0)
{
    pickachue.AttackPokemon(bulbizarre);
    bulbizarre.AttackPokemon(pickachue);
    if (bulbizarre.hp <= 0 )
    {
        console.log("Bulbizarre a perdu")
        break;
    }
    else if (pickachue.hp <= 0)
    {
        console.log("Pickachue a perdu")
        break;
    }
}