import styled, { css } from "styled-components";

export const Container = styled.span<{size:number, index: number}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${({size}) => size}px;
    height: 100%;

    @media (max-width: 1024px) {
        ${({index}) => index >= 6 && css`
            display: none;
        `}
    }

    @media (max-width: 910px) {
        ${({index}) => index === 3 && css`
            display: none;
        `}
    }
`