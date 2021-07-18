import React from "react";
import styled from "styled-components";

function Modal(props) {
  return (
    <>
      {props.open ? (
        <Container>
          <MovieBox>
            <ModalTop>
              <CloseButton
                onClick={() => {
                  props.close(false);
                }}
              >
                X
              </CloseButton>
            </ModalTop>
            {props.children}
          </MovieBox>
        </Container>
      ) : null}
    </>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovieBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 970px;
  height: 580px;
  background-color: white;
  border-radius: 10px;
`;

const ModalTop = styled.div`
  text-align: right;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  font-size: 26px;
  &:hover {
    cursor: pointer;
  }
`;

export default Modal;
