import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

function Premiere(props) {
    return (
        <>
            <Container>
                <Title>시사회/무대인사</Title>
                <Grid xs={12}>
                    <Ul>
                        <Li bg_image="https://caching.lottecinema.co.kr//Media/Event/124db66dd2b74621b6cd9a63a6dbeb18.jpg"></Li>
                        <Li
                            margin="0px 0px 0px 17px"
                            bg_image="https://caching.lottecinema.co.kr//Media/Event/fd7126a3e536403eb63b8b3893cf6774.jpg"
                        ></Li>
                        <Li
                            margin="0px 0px 0px 17px"
                            bg_image="https://caching.lottecinema.co.kr//Media/Event/71ef19f0ea5b412ba582d6bc0b0d907f.jpg"
                        ></Li>
                    </Ul>
                </Grid>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 980px;
    height: 215px;
    margin: 28px auto 0px;
    font-weight: bold;
`;

const Title = styled.div`
    font-size: 17px;
    margin: 0px 0px 10px;
`;

const Ul = styled.ul`
    display: flex;
`;

const Li = styled.li`
    ${(props) =>
        props.bg_image ? `background-image: url(${props.bg_image});` : ""};
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    width: 314px;
    height: 184px;
    border-radius: 5px;
`;

export default Premiere;
