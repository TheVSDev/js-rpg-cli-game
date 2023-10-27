// Imports
import clear from "console-clear"
import readline from "readline"

import random from "../utils/random/random.js"
import pause from "../utils/pause.js"
import pauseFight from "../utils/pauseFight.js"
import randomHealth from "../utils/random/randomHealth.js"
import randomDecreaseHealth from "../utils/random/randomDecreaseHealth.js"
import headerStyle from "../utils/style/headerStyle.js"
import colors from "../utils/style/colors.js"
import { playerHealthDisplay } from "../utils/stats.js"
import enemies from "../utils/enemies.js"
import exit from "./exit.js"
import start from "./start.js"

// Fight function
const fight = () => {
  clear()
  headerStyle("Battle", colors.blue, colors.green)

  // Extracting the enemy from the array in enemies.js
  let enemy = enemies[Math.floor(Math.random() * enemies.length)]
  console.log(enemy)

  // Enemy's stats
  console.log("Strength - " + random())
  console.log("Brains - " + random())
  let enemyHealth = randomHealth()
  console.log("Health - " + enemyHealth)

  let count = 0 // Initializing the counter
  let playerHealth = playerHealthDisplay

  // Battle function
  async function battle() {
    if (playerHealth > 0 && enemyHealth > 0) {
      count++

      headerStyle("Round #" + count, colors.green, colors.blue)

      // Decreasing player's health
      let decreaseHealth1 = randomDecreaseHealth()
      playerHealth -= decreaseHealth1
      if (decreaseHealth1 >= 12) {
        console.log("Ouch ! CRITICAL HIT ! You lost " + decreaseHealth1)
      } else {
        console.log("Ouch ! You lost " + decreaseHealth1)
      }

      await pause()

      // Decreasing enemy's health
      let decreaseHealth2 = randomDecreaseHealth()
      enemyHealth -= decreaseHealth2
      if (decreaseHealth2 >= 12) {
        console.log("Nice CRITICAL hit. Enemy lost " + decreaseHealth2)
      } else {
        console.log("Nice hit. Enemy lost " + decreaseHealth2)
      }

      await pauseFight()
      battle()

      // WIN or LOSE
    } else if (playerHealth <= 0) {
      headerStyle("Fight is over.", colors.red, colors.green)
      console.log("Damn, you lost. Better luck next time !")

      await pause();
      
      console.log("----");
      console.log("----");
      
      await pause();

      console.log(`
      1. Back to main menu
      2. Exit ❌
      `)

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      })
  
      rl.question("Your choice (1 or 2): ", (input) => {
        if (input == 1) {
          start()
          rl.close()
        } else if (input == 2) {
          exit()
          rl.close()
        } else {
          start()
        }
      })
    } else if (enemyHealth <= 0) {
      headerStyle("Fight is over.", colors.white, colors.green)
      console.log("Yayyyyy, YOU WONNN !!! ")
      console.log("You gained 50 coins.")

      await pause();
      
      console.log("----");
      console.log("----");
      
      await pause();

      console.log(`
      1. Back to main menu
      2. Exit ❌
      `)

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      })
  
      rl.question("Your choice (1 or 2): ", (input) => {
        if (input == 1) {
          start()
          rl.close()
        } else if (input == 2) {
          exit()
          rl.close()
        } else {
          start()
        }
      })
    }
  }

  battle()

}

export default fight
