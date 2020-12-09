import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography

fairyGateTheme.overrideStyles = ({ rhythm }, options) => ({
  a: {},
})

export default typography
