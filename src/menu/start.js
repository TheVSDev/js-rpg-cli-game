// Imports
import readline from "readline"
import clear from "console-clear"

import stats from "../utils/stats.js"
import pause from "../utils/pause.js"
import headerStyle from "../utils/style/headerStyle.js"
import colors from "../utils/style/colors.js"
import fight from "./fight.js"
import shop from "./shop.js"
import save from "./save.js"
import exit from "./exit.js"

// Start function
const start = () => {
  clear()
  async function menuStart() {
    headerStyle("Main Menu", colors.blue, colors.green)

    await pause()

    stats()

    await pause()

    console.log(`
    1. Fight
    2. Shop 🛒 
    3. Save game 💾
    4. Exit ❌
    `)

    await pause()

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    rl.question("Your choice (1-4): ", (input) => {
      if (input == 1) {
        fight()
        rl.close()
      } else if (input == 2) {
        shop()
        rl.close()
      } else if (input == 3) {
        save()
        rl.close()
      } else if (input == 4) {
        exit()
        rl.close()
      } else {
        start()
      }
    })
  }

  menuStart()
}

export default start
