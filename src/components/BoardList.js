import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board.js';
import './BoardList.css';


const BoardList = ({boards, chooseBoard}) => {
    const getBoardList = (boards) => {
        return boards.map((board) => {
            return (
                <Board
                    id={board.id}
                    title={board.title}
                    owner={board.owner}
                    chooseBoard={chooseBoard}
                />
            );
        });
    };
    return <div className='sub-container'>{getBoardList(boards)}</div>
};

BoardList.propTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape({
            borad_id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired,
        }).isRequired
        ),
    chooseBoard: PropTypes.func.isRequired
};

export default BoardList;