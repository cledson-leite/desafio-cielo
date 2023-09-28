import styled from "styled-components";

export const Container = styled.div<{odd: boolean}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: ${({theme, odd}) => odd ? theme.primary : theme.terciary};
    font-size: .875rem;
    font-weight: 700;
    text-align: center;
    color: ${({theme, odd}) => odd ? theme.secondary : theme.primary};
    padding: 0 16px;
`