import { DefaultTheme } from "styled-components";

const colors = {
  primary: "#378ce7",
};

const fontSize = {};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};
export default theme;
