import { nanoid } from "nanoid";

export type CardType = {
  id: number | string; // Az ID lehet szám vagy string, hogy a nanoid is működjön
  image: string; // Emoji karakter
  matchingCardId: number | string; // A páros kártya azonosítója
  flipped: boolean;
  clickable: boolean;
  matched: boolean;
};

export const baseEmojis = [
  "🦊",
  "🐶",
  "🐱",
  "🐹",
  "🐰",
  "🐵",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐷",
];

export const createBoard = (pairCount: number): CardType[] => {
  const selected = baseEmojis.slice(0, pairCount);

  const cards: CardType[] = [];

  selected.forEach((emoji) => {
    const id1 = nanoid();
    const id2 = nanoid();

    cards.push(
      {
        id: id1,
        image: emoji,
        matchingCardId: id2,
        flipped: false,
        clickable: true,
        matched: false,
      },
      {
        id: id2,
        image: emoji,
        matchingCardId: id1,
        flipped: false,
        clickable: true,
        matched: false,
      }
    );
  });

  return cards;
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
