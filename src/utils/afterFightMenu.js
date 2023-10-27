// Imports
import readline from "readline"
import start from "../menu/start.js";
import exit from "../menu/exit.js";

// After Fight Menu
let afterFightMenu = () => {
    console.log("----");
    console.log("----");
    
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

export default afterFightMenu
