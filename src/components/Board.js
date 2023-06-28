import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Board.css';

const Board = ({board_id, title, owner, chooseBoard, cards}) => {
    return (
        <button className='board-button' onClick={() => chooseBoard(board_id)}>
            <Link to="card" style={{ textDecoration: 'none' }} state={{ cards: cards, boardName: title }} >
                <h3>{title}</h3>
                <h4>Created by: {owner}</h4>
            </Link>
        </button>
    );
};

Board.propTypes = {
    board_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    chooseBoard: PropTypes.func.isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            board_id: PropTypes.number.isRequired,
            card_id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likes_count: PropTypes.number.isRequired
        })
    ).isRequired
};

export default Board;