import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./Card.css";

const Card = ({board_id, card_id, message, likes_count, deleteCard, likeCount, boardId}) => {
    const [likesCount, setLikesCount] = useState(likes_count);
    const [show, setShow] = useState(true);

    const onLikesChange = () => {
        const newCard = {likes_count: likesCount + 1};
        likeCount(newCard, card_id);
        setLikesCount(likesCount + 1);
    };

    const onDelete = () => {
        deleteCard(card_id);
        setShow(false);
    };

    return (
        <div>
            {show ? (
                <div className="card">
                <h3>{message}</h3>
                <span>
                    <button className="button" onClick={onDelete}>Delete</button>
                    <button className="button" onClick={onLikesChange}>{likesCount} ♥ </button>
                </span>
                </div>
            ) : null
            }
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
