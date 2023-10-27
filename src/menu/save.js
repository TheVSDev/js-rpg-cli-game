// Imports
import clear from "console-clear"
import { writeFile } from "node:fs"

import headerStyle from "../utils/style/headerStyle.js"
import colors from "../utils/style/colors.js"
import stats  from "../utils/stats.js"

// Save function
const save = async () => {
  clear()

  let userStats = stats();
  const data = JSON.stringify(userStats)
  writeFile("userStats.json", String(data), (err) => {
    if (err) {
      throw err
    }
  })
  
  headerStyle("Game saved", colors.blue, colors.green)
  console.log("Thanks for playing. -- (game saved)")
  
}

export default save
