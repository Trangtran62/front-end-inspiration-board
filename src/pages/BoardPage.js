import React from 'react';
import { useState, useEffect } from 'react';
import './Page.css';
import BoardList from '../components/BoardList.js';
import axios from 'axios';
import NewBoardForm from '../components/NewBoardForm.js';

const BoardPage = () => {
//     // This will be replaced with an useEffect API call
//     const initialBoards = [
//         {
//             board_id: 1,
//             title: "Board 1",
//             owner: "Person 1",
//         },
//         {
//             board_id: 2,
//             title: "Board 2",
//             owner: "Person 2",
//         },
//         {
//             board_id: 3,
//             title: "Board 3",
//             owner: "Person 3",
//         },
//         {
//             board_id: 4,
//             title: "Board 4",
//             owner: "Person 4",
//         },
//         {
//             board_id: 5,
//             title: "Board 5",
//             owner: "Person 5",
//         },
//         {
//             board_id: 6,
//             title: "Board 6",
//             owner: "Person 6",
//         },
//     ];

//     const CARDS_DATA = [
//         {
//             board_id: 1,
//             card_id: 1,
//             message: "shakshfjakf",
//             likes_count: 0
//         },
//         {
//             board_id: 1,
//             card_id: 2,
//             message: "dhheue",
//             likes_count: 0
//         },
//         {
//             board_id: 2,
//             card_id: 3,
//             message: "fdf",
//             likes_count: 0
//         },
//         {
//             board_id: 1,
//             card_id: 4,
//             message: "ryrye",
//             likes_count: 0
//         },
//         {
//             board_id: 1,
//             card_id: 5,
//             message: "wrer",
//             likes_count: 0
//         },
//     ];

    const [boardsData, setBoardsData] = useState([]);
    // const [cards, setCards] = useState(CARDS_DATA);
    
    const getAllBoards = () => {
        axios
            .get(`${process.env.API}/boards`)
            .then((result) => {
                setBoardsData(result.data);
            });
    };

    useEffect(() => {
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
            .post(`${process.env.API}/boards`, board)
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
