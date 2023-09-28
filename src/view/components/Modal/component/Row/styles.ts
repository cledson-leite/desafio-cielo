import styled from "styled-components";

export const Container = styled.div<{show: boolean}>`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    margin-bottom: 16px;

    @media (max-width: 560px) {
       grid-template-columns: repeat(2, 1fr);
       overflow-y: scroll;
    }

    @media (max-width: 390px) {
       grid-template-columns: repeat(1, 1fr);
       overflow-y: scroll;
    }
`