import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    terciary: string;
    bg: string;
    text: string;
  }
}