import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 224px;
    height: 70px;
    border: 1px solid ${({theme}) => theme.secondary};
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 700;
    color: ${({theme}) => theme.secondary};
    padding-bottom: 8px;

    @media (max-width: 790px) {
        width: 175px;
    }

    @media (max-width: 390px) {
         width: 224px;
    }
`
export const CellHead = styled.span`
    display: flex;
     justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    background-color: ${({theme}) => theme.bg};
     border-bottom: 1px solid ${({theme}) => theme.secondary};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`