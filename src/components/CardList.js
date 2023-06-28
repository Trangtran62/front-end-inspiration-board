import React from "react";
import PropTypes from "prop-types";
import Card from "./Card.js";
import "./Card.css";

const CardList = ({cards, deleteCard, likeCount}) => {
    const getAllCards = (cards) => {
        return cards.map((card) => {
            return (
                <Card 
                    key={card.card_id}
                    board_id={card.board_id}
                    card_id={card.card_id}
                    message={card.message}
                    likes_count={card.likes_count}
                    deleteCard={card.deleteCard}
                    likeCount={card.likeCount}
                />
            );
        });
    };
    return <div className="sub-container-cards">{getAllCards(cards)}</div>
};

CardList.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            board_id: PropTypes.number.isRequired,
            card_id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            likes_count: PropTypes.number.isRequired
        })
    ).isRequired,
    deleteCard: PropTypes.func.isRequired,
    likeCount: PropTypes.func.isRequired
}

export default CardList;