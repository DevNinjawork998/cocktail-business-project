import "styled-components";
import { StyledTheme } from "@/theme/styled-theme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends StyledTheme {}
}
