import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  console.log("Card props:", props);
  const { message, likes_count } = props.cardData;

  return (
    <section className="individual-card-container ">
      <p className="card-message">{message}</p>

      <div className="heart-button">
        <button
          className="btn btn-sm btn-light"
          onClick={() => props.cardPlusOne(props.cardData)}
        >
          ❤️
        </button>
      </div>

      <p className="likes-count">{likes_count}</p>

      <div className="delete-button">
        <button
          className="btn btn-sm btn-light"
          onClick={() => props.deleteCard(props.cardData)}
        >
          Delete
        </button>
      </div>
    </section>
  );
};

// // Card.propTypes = {};

export default Card;
