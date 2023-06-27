import React from 'react';
import { useState, useEffect } from 'react';
import './BoardPage.css';
// import { Link } from 'react-router-dom';
import BoardList from '../components/BoardList.js';
import axios from 'axios';
import NewBoardForm from '../components/NewBoardForm.js';

const BoardPage = () => {
    // This will be replaced with an useEffect API call
    const BOARDS_DATA = [
        {
            board_id: 1,
            title: "Board 1",
            owner: "Person 1",
        },
        {
            board_id: 2,
            title: "Board 2",
            owner: "Person 2",
        },
        {
            board_id: 3,
            title: "Board 3",
            owner: "Person 3",
        },
        {
            board_id: 4,
            title: "Board 4",
            owner: "Person 4",
        },
        {
            board_id: 5,
            title: "Board 5",
            owner: "Person 5",
        },
        {
            board_id: 6,
            title: "Board 6",
            owner: "Person 6",
        },
    ];

    const CARDS_DATA = [
        {
            board_id: 1,
            message: "shakshfjakf",
            likes_count: 0
        },
        {
            board_id: 1,
            message: "dhheue",
            likes_count: 0
        },
        {
            board_id: 2,
            message: "fdf",
            likes_count: 0
        }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [currentBoards, setCurrentBoards] = useState(BOARDS_DATA.slice(0,4));
    const [cards, setCards] = useState(CARDS_DATA);
    
    // Move to the next or prev set of boards on click
    const boardChange = (direction) => {
        const index = (direction === "next" && ((startIndex + 4) < BOARDS_DATA.length)) ? startIndex + 4
                    : (direction === "prev" && (startIndex - 4 >= 0)) ? startIndex - 4
                    : 0;
        setStartIndex(index);
        setCurrentBoards(BOARDS_DATA.slice(startIndex, startIndex + 4)); 
    };

    const chooseBoard = (id) => {
        // This will be replaced will an API call to get cards by board id
        const newCards = cards.filter((card) => card.board_id === id);
        setCards(newCards);
    };

    const postBoard = (board) => {
        // This will be replaced with a post request
        const newBoards = currentBoards.push(board);
        setCurrentBoards(newBoards);
    }

    return (
        <body className='page'>
            <header>
                <div className='board-page-title'><h1>Inspiration Boards</h1></div>
            </header>
            <main>
                <section>
                    <div className='sub-page-title'><h2>Boards</h2></div>
                    <BoardList boards={currentBoards} chooseBoard={chooseBoard} />
                    <div>
                        <button onClick={() => boardChange("prev")}>↩ </button>
                        <button onClick={() => boardChange("next")}> ↪</button>
                    </div>
                </section>
                <section>
                    <div className='sub-page-title'><h2>New Board</h2></div>
                    <div className='sub-container'>
                        <NewBoardForm addBoard={postBoard} />
                    </div>
                </section>
            </main>
        </body>
    );

};

export default BoardPage;