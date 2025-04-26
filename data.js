//holds the classes
let playerName = localStorage.getItem("userName") || "Hero";
export class Player {
    constructor(){
        this.name = playerName;
        this.health = 100;
        this.recipeInventory = [];

        this.vegetableEXP = 0;
        this.vegetableLevel = 1;
        this.vegetableEXPNeeded = 100;

        this.fruitEXP = 0;
        this.fruitLevel = 1;
        this.fruitEXPNeeded = 100;

        this.grainEXP = 0;
        this.grainLevel = 1;
        this.grainEXPNeeded = 100;

        this.dairyEXP = 0;
        this.dairyLevel = 1;
        this.dairyEXPNeeded = 100;

        this.meatEXP = 0;
        this.meatLevel = 1;
        this.meatEXPNeeded = 100;

        this.dessertEXP = 0;
        this.dessertLevel = 1;
        this.dessertEXPNeeded = 100;
    }

    //easy way to increase player levels and their requirements for reaching the next level
    updateLevel(level, experience, expRequirement){
        while(experience >= expRequirement){
            level++;
            experience -= expRequirement; //removes excess experience
            expRequirement += 10;
            //TODO: call LearnSkill method
            print("level updated");
        }
    }
};

export class Recipe{
    constructor(){
        recipeName = "";
        ingredientList = [];
        recipeTypes = [];
    }
  };

  export class Enemy {
    types = [];
    skills = [];
}

export class Skill {
    skillName = "";
    powerLevel = 0;
}

const tomatoTumble = new Skill('Tomato Tumble', 250);
const potatoPilfer = new Skill('Potato Pilfer', 300);