import { DefaultTheme } from "styled-components";

const colors = {
  primary: "#378ce7",
};

const fontSize = {};

const padding = {
  searchBar: "10px",
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;
export type PaddingTypes = typeof padding;

const theme: DefaultTheme = {
  colors,
  fontSize,
  padding,
};
export default theme;
