const colors = {
  bg: "#1D213A",
} as const;

interface Font {
  weight: 300 | 400 | 500 | 600 | 700;
  size: number;
  lineHeight: number;
  letterSpacing: number;
}

function FONT({ weight, size, lineHeight, letterSpacing }: Font): string {
  return `
      font-weight: ${weight};
      font-size: ${size}px;
      line-height: ${lineHeight}px;
      letter-spacing: -0.0${letterSpacing}px;
    `;
}

const fonts = {
  title1: FONT({ weight: 700, size: 20, lineHeight: 20, letterSpacing: 5 }),
  title2: FONT({ weight: 700, size: 18, lineHeight: 20, letterSpacing: 5 }),
  title3: FONT({ weight: 700, size: 17, lineHeight: 20, letterSpacing: 5 }),
  subtitle1: FONT({ weight: 700, size: 16, lineHeight: 20, letterSpacing: 5 }),
  subtitle2: FONT({ weight: 600, size: 16, lineHeight: 20, letterSpacing: 5 }),
  body1: FONT({ weight: 500, size: 16, lineHeight: 20, letterSpacing: 5 }),
  body2: FONT({ weight: 400, size: 16, lineHeight: 20, letterSpacing: 5 }),
  body3: FONT({ weight: 600, size: 15, lineHeight: 20, letterSpacing: 5 }),
  caption1: FONT({ weight: 600, size: 14, lineHeight: 20, letterSpacing: 5 }),
  caption2: FONT({ weight: 500, size: 14, lineHeight: 20, letterSpacing: 5 }),
} as const;

const theme = {
  colors,
  fonts,
} as const;

export default theme;
