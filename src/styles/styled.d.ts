import "styled-components";
import { ColorsTypes, FontSizeTypes, PaddingTypes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSize: FontSizeTypes;
    padding: PaddingTypes;
  }
}
