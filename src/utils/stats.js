import random from "./random/random.js"
import randomHealth from "./random/randomHealth.js"

export let playerHealthDisplay = randomHealth()

let stats = () => {
  console.log("STATS")

  let userStats = {
    health: playerHealthDisplay,
    strength: random(),
    brains: random(),
    money: 0,
    xp: 0,
  }

  console.log("Health - " + userStats.health)
  console.log("Strength - " + userStats.strength)
  console.log("Brains - " + userStats.brains)
  console.log("Money - " + userStats.money)
  console.log("XP - " + userStats.xp)
  
  return userStats
}

export let userStats
export default stats
