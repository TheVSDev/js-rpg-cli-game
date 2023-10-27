// Imports
import clear from "console-clear"

import headerStyle from "../utils/style/headerStyle.js"
import colors from "../utils/style/colors.js"

// Exit function
const exit = () => {
  clear()
  headerStyle("Game over", colors.blue, colors.green)
  console.log("Thanks for playing.")
}

export default exit
