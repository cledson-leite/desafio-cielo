import styled from "styled-components";

export const Container = styled.div<{show: boolean}>`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    width: 100%;
    height: ${({show}) => show ? '100%' : '0%'};
    transition: height 3s;
    overflow-y: hidden;

    background-color: ${({theme}) => theme.primary};
`
export const Data =styled.div`
    display: flex;
    flex-direction: column;
    gap: 75px;
    padding: 16px 0;
    height: 100%;

    @media (max-width: 960px){
        gap: 50px;
    }
`