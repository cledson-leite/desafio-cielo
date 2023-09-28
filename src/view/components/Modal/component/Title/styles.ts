import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    text-transform: uppercase;
    font-size: 1.875rem;
    font-weight: 700;
    color: ${({theme}) => theme.secondary};
    gap: 100px;
    padding-right: 100px;

    @media (max-width: 470px){
        gap: 10px;
        padding-right: 32px;
    }
`