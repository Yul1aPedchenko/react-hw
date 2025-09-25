import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.6);
  z-index: 1000;
`;

export const ModalWindow = styled.div`
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
`;
