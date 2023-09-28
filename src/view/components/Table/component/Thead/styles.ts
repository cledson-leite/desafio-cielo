import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: ${({theme}) => theme.bg};
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    color: ${({theme}) => theme.secondary};
    padding-left: 16px;
    padding-right: 30px;

    @media (max-width: 1024px) {
        padding-right: 16px;
    }
`