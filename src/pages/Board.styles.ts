import styled from "styled-components";

export const BoardContainer = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    border: none;
  }
  img.nav-logo {
    width: 250px;
    height: 250px;
    margin-right: 0.5rem;
  }
  .counter {
    font-size: 3.5rem;
    font-weight: bold;
    color: #ff3f56;
    margin-left: 1rem;
  }
  .mistakes {
    width: 100px;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 1rem;
  }
  .icons {
    width: 250px;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 1rem;
    cursor: pointer;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 1rem;
  margin: 2rem 1rem;
`;
