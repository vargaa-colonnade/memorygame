import type { CardType } from "../constants/data";
import { Wrapper, Front, Back, CardBackImage } from "./Card.styles";
import cardBack from "../assets/images/card-back.svg";
import cardBackHover from "../assets/images/card-back-hover.svg";

type Props = {
  card: CardType;
  callback: (card: CardType) => void;
};

const Card = ({ card, callback }: Props) => {
  const handleClick = () => {
    if (card.clickable && !card.flipped && !card.matched) {
      callback(card);
    }
  };

  return (
    <Wrapper onClick={handleClick}>
      <Front flipped={card.flipped} matched={card.matched}>
        {card.image}
      </Front>
      <Back
        hoverImage={cardBackHover}
        flipped={card.flipped}
        matched={card.matched}
      >
        <CardBackImage src={cardBack} alt="Card back" />
      </Back>
    </Wrapper>
  );
};

export default Card;
