import colors from "./colors.js"

const headerStyle = (text, color, textColor = colors.reset) => {
  // At least four spaces on each side of the string
  const length = Math.max(29, text.length + 4 * 2)

  const pipe = `${color}|${colors.reset}`
  const emptySpace = length - text.length

  const leftSpaceLength = Math.floor(emptySpace / 2)
  const rightSpaceLength = emptySpace - leftSpaceLength
  const leftSpace = Array.from({ length: leftSpaceLength }).fill(" ").join("")
  const rightSpace = Array.from({ length: rightSpaceLength }).fill(" ").join("")
  const divider = `${color}+${Array.from({ length }).fill("-").join("")}+${
    colors.reset
  }`

  const textLine =
    pipe + leftSpace + textColor + text + colors.reset + rightSpace + pipe

  console.log([divider, textLine, divider].map((e) => "    " + e).join("\n"))
}

export default headerStyle