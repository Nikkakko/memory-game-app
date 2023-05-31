import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      dark: string;
      background: string;
      text: string;
      highlight: string;
      white: string;
    };
  }
}
