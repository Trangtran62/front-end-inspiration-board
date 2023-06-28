import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Board.css';

const Board = ({board_id, title, owner}) => {
    return (
        <button className='board-button'>
            <Link to="card" style={{ textDecoration: 'none' }} state={{ boardName: title, boardId: board_id }} >
                <h2>{title}</h2>
                <h3>Created by: {owner}</h3>
            </Link>
        </button>
    );
};

Board.propTypes = {
    board_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    // chooseBoard: PropTypes.func.isRequired,
    // cards: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         board_id: PropTypes.number.isRequired,
    //         card_id: PropTypes.number.isRequired,
    //         message: PropTypes.string.isRequired,
    //         likes_count: PropTypes.number.isRequired
    //     })
    // ).isRequired
};

export default Board;
