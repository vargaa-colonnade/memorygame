import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  width: 320px;
  max-width: 90vw;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const Header = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 1.25rem;
  cursor: pointer;
`;
