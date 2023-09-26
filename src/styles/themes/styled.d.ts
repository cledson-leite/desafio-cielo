import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    border: string;
    bg: string;
    text: string;
    sombra: string;
    disable: string;
  }
}