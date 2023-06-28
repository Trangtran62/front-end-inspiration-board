import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./Card.css";

const Card = ({board_id, card_id, message, likes_count, deleteCard, likeCount, boardId}) => {
    const [likesCount, setLikesCount] = useState(likes_count);
    const [buttonClick, setButtonClick] = useState(0);

    useEffect(() => {
        likeCount(card_id);
    }, [likesCount]);

    useEffect(() => {

    }, [deleteCard]);

    return (
        <div className="card">
            <h3>{message}</h3>
            <span>
                <button className="button" onClick={() => deleteCard(card_id)}>Delete</button>
                <button className="button" onClick={() => setLikesCount(likesCount + 1)}><span>{likesCount}</span> ♥ </button>
            </span>
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
