// Imports
import clear from "console-clear"
import readline from "readline"

import pause from "../utils/pause.js"
import headerStyle from "../utils/style/headerStyle.js"
import colors from "../utils/style/colors.js"
import start from "./start.js"
// import { userStats } from "../utils/stats.js"

// Shop function
const shop = () => {
  clear()
  
  async function shopping() {
    headerStyle("Shop", colors.blue, colors.green)

    await pause()

    console.log(`
    1. Buy 10 HP for 20 Money
    2. Buy 10 Strength for 35 Money  
    3. Buy 10 XP for 50 Money
    4. Go back to main menu  
    `)

    await pause()

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    rl.question("Your choice (1-4): ", (input) => {
      if (input == 1) {
        // +10HP -20Money
        rl.close()
      } else if (input == 2) {
        // +10Strength -35Money
        rl.close()
      } else if (input == 3) {
        // +10XP - 50Money
        rl.close()
      } else if (input == 4) {
        start()
        rl.close()
      }
    })
  }

  shopping()
}

export default shop
