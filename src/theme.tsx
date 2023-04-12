export const theme = Object.freeze({
  colors: {
    primary: "#757575",
    secondary: "#212121",
    background: "#f5f4fa",
    hover: "#2196f3",
    disabled: "#b4b4b4",
    black: "rgba(0, 0, 0, 0.87)",
    white: "#ffffff",
    error: "#cb3d40",
    inputBorder: "#d0cfcf",
    placeholder: "#7e7e7e",
    blue: "#2196f3",
    darkBlue: "#188ce8",
    heroBg: `#c4c4c4`,
  },
  fontSizes: {
    small: "12px",
    medium: "16px",
    large: "24px",
    xl: "40px",
  },
  fontWeigths: { normal: 400, bold: 700 },
  spacing: (value: number) => `${4 * value}px`,
  shadows: {
    small: "0 5px 7px -1px rgba(51, 51, 51, 0.23)",
    regular: "0px 4px 10px 4px #9e9e9e",
    medium: "0 9px 47px 11px rgba(51, 51, 51, 0.18);",
  },
  animation: {
    cubicBezier: "0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)",
  },
});

export type ThemeType = typeof theme;
