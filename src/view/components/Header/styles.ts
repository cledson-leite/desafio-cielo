import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.secondary};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`
export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: ${({theme}) => theme.text}
`