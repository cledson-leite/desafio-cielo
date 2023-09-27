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
`
export const Name = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
`
export const Action = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 5rem;
`
export const Link = styled.a`
    text-decoration: none;
    font-size: 2rem;
    color: ${({theme}) => theme.text};
`