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
};

export default Board;
