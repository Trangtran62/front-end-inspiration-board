import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board.js';
import './BoardList.css';
import { Link } from 'react-router-dom';

const BoardList = ({boards, chooseBoard}) => {
    const getBoardList = (boards) => {
        return boards.map((board) => {
            return (
                <Board
                    id={board.id}
                    title={board.title}
                    owner={board.owner}
                    cards={board.cards}
                    chooseBoard={chooseBoard}
                />
            );
        });
    };
    return <div className='sub-container'>{getBoardList(boards)}</div>
};

BoardList.PropTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired,
            cards: PropTypes.arrayOf(
                PropTypes.shape({
                message: PropTypes.string.isRequired,
                likes_count: PropTypes.number.isRequired
                })
            ).isRequired,
        })
    ).isRequired,
    chooseBoard: PropTypes.func.isRequired
};

export default BoardList;