import React from "react";
import PropTypes from "prop-types";
import Card from "./Card.js";
import "./CardList.css";

const CardList = ({cards, deleteCard, likeCount, boardId}) => {
    const getAllCards = (cards) => {
        return cards.map((card) => {
            return (
                <Card 
                    key={card.card_id}
                    board_id={card.board_id}
                    card_id={card.card_id}
                    message={card.message}
                    likes_count={card.likes_count}
                    deleteCard={deleteCard}
                    likeCount={likeCount}
                    boardId={boardId}
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
            message: PropTypes.string.isRequired,
            likes_count: PropTypes.number.isRequired
        })
    ).isRequired,
    boardId: PropTypes.number.isRequired,
    deleteCard: PropTypes.func.isRequired,
    likeCount: PropTypes.func.isRequired
}

export default CardList;