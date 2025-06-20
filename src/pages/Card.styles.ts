import styled, { css, keyframes } from "styled-components";

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-15px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(15px);
    opacity: 0;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(15px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutToLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-15px);
    opacity: 0;
  }
`;

type Props = {
  flipped: boolean;
  matched: boolean;
};

const sharedStyles = css<Props>`
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100px;
  height: 150px;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  background-color: white;
  opacity: ${(props) => (props.matched ? 0.5 : 1)};
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100px;
  height: 150px;
`;

export const Front = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "flipped" && prop !== "matched",
})<Props>`
  ${sharedStyles}
  position: absolute;
  top: 0;
  left: 0;
  animation: ${(props) => (props.flipped ? slideInFromLeft : slideOutToLeft)}
    0.3s forwards;
  z-index: ${(props) => (props.flipped ? 10 : 1)};
`;

export const Back = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "flipped" && prop !== "matched",
})<Props & { hoverImage: string }>`
  ${sharedStyles}
  background-color: #fff;

  position: absolute;
  top: 0;
  left: 0;
  animation: ${(props) => (props.flipped ? slideOutToRight : slideInFromRight)}
    0.3s forwards;
  z-index: ${(props) => (props.flipped ? 1 : 10)};
  &:hover {
    background-image: url("../assets/images/card-back-hover.svg");
  }
`;

export const CardBackImage = styled.img`
  background-size: cover;
  background-position: center;
  object-fit: cover;
  width: 100px;
  height: 150px;
  border: 8px;
`;
