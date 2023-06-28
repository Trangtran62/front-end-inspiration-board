import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({board_id, card_id, message, likes_count, deleteCard, likeCount}) => {
    const onLikeClick = () => {
        const updatedCard = {
            board_id: board_id,
            card_id: card_id,
            message: message,
            likes_count: likes_count
        };
        likeCount(updatedCard);
    };

    return (
        <div className="card-frame">
            <div className="card">{message}</div>
            <div className="card-button-container">
                <button className="button" onClick={() => deleteCard(card_id)}>Delete</button>
                <button className="button" onClick={onLikeClick}><span>{likes_count}</span> 💟</button>
            </div>
        </div>
    )
};

Card.propTypes = {
    board_id: PropTypes.number.isRequired,
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
    deleteCard: PropTypes.func.isRequired,
    likeCount: PropTypes.func.isRequired
};

export default Card;
