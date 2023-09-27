import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;

    background-color: ${({theme}) => theme.primary};
`
export const TBody = styled.div`
    overflow-y: auto;
`
