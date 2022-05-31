import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      black: string;
      white: string;
      gray: string;
      yellow: string;
      blue: string;
      darkblue: string;
    };
  }
}
