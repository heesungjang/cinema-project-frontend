import React from "react";
import styled from "styled-components";
import { PacmanLoader } from "react-spinners";

function Spinner() {
    return (
        <>
            <Container>
                <PacmanLoader size={60} color={"#88B14B"} />
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f9ecd9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Spinner;
