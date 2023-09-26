import React from "react";
import { ThemeProvider } from "styled-components";
import { light } from "./light";

type ProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeModeProvider: React.FC<ProviderProps> = ({
  children,
}) => {
    const theme = light
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

