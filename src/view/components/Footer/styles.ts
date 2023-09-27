import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.secondary};
    color: ${({theme}) => theme.text};
`
export const Text = styled.p`
    font-size: 1.25rem;
    font-weight: 400;

    @media (max-width: 512px) {
         font-size: 1rem;
    }
`
export const Name = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    
    @media (max-width: 512px) {
         font-size: 1rem;
         text-align: center;
    }
`
export const Action = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 5rem;
    @media (max-width: 512px) {
        width: 2.25rem;
    }
`
export const Link = styled.a`
    text-decoration: none;
    font-size: 2rem;
    color: ${({theme}) => theme.text};

    @media (max-width: 512px) {
        font-size: 1rem;
    }
`