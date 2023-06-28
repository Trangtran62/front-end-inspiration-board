import React from 'react';
import { useState, useEffect } from 'react';
import './Page.css';
import BoardList from '../components/BoardList.js';
import axios from 'axios';
import NewBoardForm from '../components/NewBoardForm.js';

const BoardPage = () => {

    const [boardsData, setBoardsData] = useState([]);
    const API = "https://inspiration-board-api.onrender.com";

    const getAllBoards = () => {
        axios
            .get(`${API}/boards`)
            .then((result) => {
                setBoardsData(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        console.log(boardsData);
        getAllBoards();
    }, []);

    const [startIndex, setStartIndex] = useState(0);
    const initialCurrentBoard = boardsData.slice(0,4);
    const [currentBoards, setCurrentBoards] = useState(initialCurrentBoard);

    // Move to the next or prev set of boards on click
    const boardChange = (direction) => {
        const index = (direction === "next" && ((startIndex + 4) < boardsData.length)) ? startIndex + 4
                    : (direction === "prev" && (startIndex - 4 >= 0)) ? startIndex - 4
                    : 0;
        setStartIndex(index);
        setCurrentBoards(boardsData.slice(startIndex, startIndex + 4)); 
    };

    const postBoard = (board) => {
        // const newBoard = {...board, board_id: Date.now()};
        // boardsData.push(newBoard);
        // setBoardsData(boardsData);
        axios
            .post(`${API}/boards`, board)
            .then(() => {
                getAllBoards();
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <div className='page'>
            <div className='board-page-title'>Inspiration Boards</div>
            <div className='board-body'>
                <div className='board-div'>
                    <div className='sub-page-title'>Boards</div>
                    <p>Toggle the arrow buttons below to show boards</p>
                    <BoardList boards={currentBoards} />
                    <div>
                        <button onClick={() => boardChange("prev")}>↩ </button>
                        <button onClick={() => boardChange("next")}> ↪</button>
                    </div>
                </div>    
                <div className='board-div'>
                    <div className='sub-page-title'>New Board</div>
                    <NewBoardForm addBoard={postBoard} />
                </div>
            </div>
        </div>
    );

};

export default BoardPage;
