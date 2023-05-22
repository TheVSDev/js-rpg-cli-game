import { readFile } from "node:fs"
import clear from "console-clear"

import headerStyle from "../utils/style/headerStyle.js"
import colors from "../utils/style/colors.js"
import welcome from "./welcome.js"
import { userStats } from "../utils/stats.js"

const load = async () => {
  clear(true)
  readFile("userStats.json", "utf8", (err, data) => {
    if (err) {
      headerStyle("No saved data")
      console.log("You don't have a saved game.")
      welcome()

      return
    }

    headerStyle("Game loaded", colors.green, colors.blue)
    let savedUserStat = JSON.parse(data)

    userStats.health = savedUserStat.health
    userStats.strength = savedUserStat.strength
    userStats.brains = savedUserStat.brains

    console.log(`
      1. Start
      2. Exit
      `)

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    rl.question("Your choice (1-2): ", (input) => {
      if (input == 1) {
        start()
        rl.close()
      } else if (input == 2) {
        exit()
        rl.close()
      }
    })
  })
}

export default load
