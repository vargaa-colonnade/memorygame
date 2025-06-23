import logo from "../assets/images/memo.png";
import settings from "../assets/images/settings.svg";
import React from "react";
import Card from "./Card";
import type { CardType } from "../constants/data";
import { baseEmojis } from "../constants/data";
import styled from "styled-components";
import { BoardContainer, HeaderContainer } from "./Board.styles";
import { Modal } from "antd";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
  max-width: 600px;
  margin: 1rem auto;
`;

const createBoard = (pairs: number): CardType[] => {
  const cards: CardType[] = [];
  for (let i = 0; i < pairs; i++) {
    const id1 = i * 2;
    const id2 = i * 2 + 1;
    const emoji = baseEmojis[i];
    cards.push(
      {
        id: id1,
        image: emoji,
        flipped: false,
        clickable: true,
        matched: false,
        matchingCardId: id2,
      },
      {
        id: id2,
        image: emoji,
        flipped: false,
        clickable: true,
        matched: false,
        matchingCardId: id1,
      }
    );
  }
  return shuffleArray(cards);
};

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Board = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [pairs, setPairs] = React.useState(4);
  const [cards, setCards] = React.useState<CardType[]>(createBoard(pairs));
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState<CardType | undefined>(
    undefined
  );
  const [isBusy, setIsBusy] = React.useState(false);
  const [countdown, setCountdown] = React.useState(60);
  const [attempts, setAttempts] = React.useState(0);

  React.useEffect(() => {
    setCards(createBoard(pairs));
    setMatchedPairs(0);
    setClickedCard(undefined);
    setIsBusy(false);
  }, [pairs]);

  React.useEffect(() => {
    if (matchedPairs === cards.length / 2 && cards.length > 0) {
      alert("Game Won!");
    }
  }, [matchedPairs, cards.length]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCardClick = (card: CardType) => {
    if (isBusy) return;
    setCards((prev) =>
      prev.map((c) =>
        c.id === card.id ? { ...c, flipped: true, clickable: false } : c
      )
    );

    if (!clickedCard) {
      setClickedCard(card);
      return;
    }

    if (clickedCard.matchingCardId === card.id) {
      setMatchedPairs((prev) => prev + 1);
      setCards((prev) =>
        prev.map((c) =>
          c.id === clickedCard.id || c.id === card.id
            ? { ...c, matched: true, clickable: false }
            : c
        )
      );
      setClickedCard(undefined);
    } else {
      setIsBusy(true);
      setTimeout(() => {
        setCards((prev) =>
          prev.map((c) =>
            c.id === clickedCard.id || c.id === card.id
              ? { ...c, flipped: false, clickable: true }
              : c
          )
        );
        setClickedCard(undefined);
        setIsBusy(false);
      }, 1000);
    }
    setAttempts((prev) => prev + 1);
  };

  const handlePairsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = Number(e.target.value);
    if (val < 2) val = 2;
    else if (val > 12) val = 12;
    setPairs(val);
  };

  return (
    <BoardContainer style={{ maxWidth: 700, margin: "auto", padding: 20 }}>
      <HeaderContainer className="container-fluid">
        <div className="navbar-brand">
          <img src={logo} alt="memo logo" className="nav-logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex justify-content-start align-items-center">
          <span className="counter">{countdown}</span>
        </div>
        <div className="d-flex justify-content-start align-items-center">
          <span className="mistakes">| Mistakes: {attempts}</span>
        </div>
        <div className="icons d-flex justify-content-start align-items-center">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <img alt="Game settings" src={settings} onClick={showModal} />
              <button
                onClick={() => {
                  setCards(createBoard(pairs));
                  setMatchedPairs(0);
                  setClickedCard(undefined);
                  setIsBusy(false);
                }}
                disabled={isBusy}
                style={{ marginLeft: 20, fontSize: "1.2rem" }}
              >
                <svg
                  width="54"
                  height="45"
                  viewBox="0 0 54 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21C20 16.875 23.3281 13.5 27.5 13.5H35V12C35 11.4375 35.3281 10.875 35.8906 10.6406C36.4531 10.4062 37.1094 10.5469 37.5312 10.9688L40.5312 13.9688C41.1406 14.5312 41.1406 15.5156 40.5312 16.0781L37.5312 19.0781C37.1094 19.5 36.4531 19.6406 35.8906 19.4062C35.3281 19.1719 35 18.6094 35 18V16.5H27.5C25.0156 16.5 23 18.5156 23 21C23 21.8438 22.2969 22.5 21.5 22.5C20.6562 22.5 20 21.8438 20 21ZM44 24C44 28.1719 40.625 31.5 36.5 31.5H29V33C29 33.6094 28.625 34.1719 28.0625 34.4062C27.5 34.6406 26.8438 34.5 26.4219 34.0781L23.4219 31.0781C22.8125 30.5156 22.8125 29.5312 23.4219 28.9688L26.4219 25.9688C26.8438 25.5469 27.5 25.4062 28.0625 25.6406C28.625 25.875 29 26.4375 29 27V28.5H36.5C38.9844 28.5 41 26.4844 41 24C41 23.2031 41.6562 22.5 42.5 22.5C43.2969 22.5 44 23.2031 44 24Z"
                    fill="#D5D5D5"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </HeaderContainer>

      <Grid>
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
      <Modal
        title="Game settings"
        centered
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={260}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Pairs (2-12):{" "}
            <input
              type="number"
              value={pairs}
              min={2}
              max={12}
              onChange={handlePairsChange}
              disabled={isBusy}
              style={{ marginLeft: "0.5rem", width: "60px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Countdown time (sec.):
            <input
              type="number"
              min={60}
              max={300}
              value={countdown}
              onChange={(e) => setCountdown(Number(e.target.value))}
              style={{ marginLeft: "0.5rem", width: "60px" }}
              required
            />
          </label>
        </div>
        <button className="start" type="submit" onClick={handleCancel}>
          Save Settings
        </button>
      </Modal>
    </BoardContainer>
  );
};

export default Board;
