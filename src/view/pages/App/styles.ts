import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 75%;
    height: 100vh;

    @media (max-width: 960px) {
        width: 90%;
    }

    @media (max-width: 630px) {
        width: 100%;
    }
`;
export const TopBar = styled.div`
    width: 100%;
    height: 70px;
`;
export const BottonBar = styled.div`
    width: 100%;
    height: 70px;
`;
export const Main = styled.div`
    width: 100%;
    height: 86%;
    position: relative;
`;