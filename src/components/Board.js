import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Board.css';

const Board = ({id, title, owner, cards, chooseBoard}) => {
    return (
        <button className='board-button' onClick={() => chooseBoard(id)}>
            <Link to="card" style={{ textDecoration: 'none' }}>
                <h3>{title}</h3>
                <h4>Created by: {owner}</h4>
            </Link></button>
    );
};

Board.PropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.stirng.isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            likes_count: PropTypes.number.isRequired
        })
    ).isRequired,
    chooseBoard: PropTypes.func.isRequired
};

export default Board;