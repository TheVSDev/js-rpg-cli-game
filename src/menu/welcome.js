// Imports
import readline from "readline"
import clear from "console-clear" // npm install --save console-clear

import start from "./start.js"
import load from "./load.js"
import exit from "./exit.js"
import pause from "../utils/pause.js"
import colors from "../utils/style/colors.js"
import headerStyle from "../utils/style/headerStyle.js"

// Welcome function
const welcome = (args) => {
  clear(true)

  async function welcomeMenu() {
    headerStyle("Welcome !", colors.blue, colors.green)

    await pause()

    console.log(`
    1. Start game ⚽
    2. Load game 💾
    3. Exit ❌
    `)

    await pause()

    // Taking user input
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    rl.question("Your choice (1-3): ", (input) => {
      if (input == 1) {
        start()
        rl.close()
      } else if (input == 2) {
        load()
        rl.close()
      } else if (input == 3) {
        exit()
        rl.close()
      } else {
        run()
      }
    })
  }

  welcomeMenu()
}

export default welcome
