import { spacing } from "./spacing"

const largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem", // 224px
  "2xs": "16rem", // 256px
  xs: "20rem", // 320px
  sm: "24rem", // 384px
  md: "28rem", // 448px
  lg: "32rem", // 512px
  xl: "36rem", // 640px
  "2xl": "42rem", // 768px
  "3xl": "48rem", // 896px
  "4xl": "56rem", // 1024px
  "5xl": "64rem", // 1280px
  "6xl": "72rem", // 1536px
  "7xl": "80rem", // 1792px
  "8xl": "90rem", // 2048px
}

const container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}

const sizes = {
  ...spacing,
  ...largeSizes,
  container,
}

export default sizes
