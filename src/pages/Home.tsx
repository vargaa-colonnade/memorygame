import "./Home.css";
import intro from "../assets/images/memo.jpg";

const Home = () => {
  return (
    <div className="container">
      <div className="intro-content">
        <div>
          <h1>Card-matching Game Rules</h1>
          <p>
            Choose a card and carefully turn it over with clicking. Be sure not
            to bother the surrounding cards. The player then selects another
            card and turns it over. If the two cards are a matching pair for
            example two Jacks then they take the two cards and start a stack.
            The player is awarded another turn for making a match and goes
            again. If the cards are not a match they are turned back over. If it
            is a match for one of the cards the player turned over then they try
            to remember where that matching card was and turn it. The game
            continues in this fashion until all the cards are played.
          </p>
        </div>
      </div>
      <div className="img-content">
        <img src={intro} alt="intro img" className="intro-img" />
        <h1>Test project 🙈</h1>
      </div>
    </div>
  );
};

export default Home;
