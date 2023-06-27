import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board.js';
import './BoardList.css';


const BoardList = ({boards, chooseBoard, cards}) => {
    const getBoardList = (boards) => {
        return boards.map((board) => {
            return (
                <Board
                    board_id={board.board_id}
                    title={board.title}
                    owner={board.owner}
                    chooseBoard={chooseBoard}
                    cards={cards}
                />
            );
        });
    };
    return <div className='sub-container'>{getBoardList(boards)}</div>
};

BoardList.propTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape({
            board_id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired,
        }).isRequired
        ),
    chooseBoard: PropTypes.func.isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            board_id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likes_count: PropTypes.number.isRequired
        })
    ).isRequired
};

export default BoardList;