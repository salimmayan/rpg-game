import { Warrior } from '../src/Warrior.js';

// Fight class that manages the battle, and displays the results
export class Fight {
  constructor() {
  }

  // Start the fight!
  battle(warrior1, warrior2) {
    warrior1.health = warrior1.healthReducer(warrior1.strength);
    warrior2.health = warrior2.healthReducer(warrior2.strength);

    if (warrior1.health > warrior2.health) {
      warrior1.winCount++;
      this.displayBattleResults(warrior1, "Winner ==> ");
      this.displayBattleResults(warrior2, "Loser ==> ");
      return warrior2.name;
    }
    else if (warrior2.health > warrior1.health) {
      warrior2.winCount++;
      this.displayBattleResults(warrior2, "Winner ==> ");
      this.displayBattleResults(warrior1, "Loser ==> ");
      return warrior1.name;
    }
    else {
      console.log("THERE IS SOMETHING REALLY WRONG HERE!!!!");
    }
  }

  // Display fight results
  displayBattleResults(objectName, message) {
    console.log(`${message} Name:Weapon:Level:Health:WinCount:Strength::::::${objectName.getName()}:${objectName.getWeapon()}:${objectName.getLevel()}:${objectName.getHealth()}:${objectName.getWinCount()}:${objectName.strength}`);
  }

}