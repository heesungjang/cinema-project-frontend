import React from "react";
import styled from "styled-components";
import { BarLoader } from "react-spinners";

function Spinner() {
    return (
        <>
            <Container>
                <Text>Loading...</Text>
                <BarLoader width={500} color={"#88B14B"} />
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

const Text = styled.div`
    width: 500px;
    font-size: 50px;
    color: #88b14b;
    text-align: center;
    margin-bottom: 20px;
`;

export default Spinner;
