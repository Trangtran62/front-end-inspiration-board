import React, { useState, useEffect } from 'react';
import './Board.css';
import { Link } from 'react-router-dom';
import BoardList from '../components/BoardList.js';
import CardList from '../components/CardList.js';
import Card from '../components/Card.js';
import axios from 'axios';
import NewBoardForm from '../components/NewBoardForm.js';

const BoardPage = () => {
    // This will be replaced with an useEffect API call
    const BOARDS_DATA = [
        {
            id: 1,
            title: "Board 1",
            owner: "Person 1",
            cards: [
                {
                    message: "abc",
                    likes_count: 0
                },
                {
                    message: "efg",
                    likes_count: 0
                }
            ]
        },
        {
            id: 2,
            title: "Board 2",
            owner: "Person 2",
            cards: [
                {
                    message: "abc",
                    likes_count: 0
                },
                {
                    message: "efg",
                    likes_count: 0
                }
            ]
        },
        {
            id: 3,
            title: "Board 3",
            owner: "Person 3",
            cards: [
                {
                    message: "gfs",
                    likes_count: 0
                },
                {
                    message: "tert",
                    likes_count: 0
                }
            ]
        },
        {
            id: 4,
            title: "Board 4",
            owner: "Person 4",
            cards: [
                {
                    message: "yuuy",
                    likes_count: 0
                },
                {
                    message: "ert",
                    likes_count: 0
                }
            ]
        },
        {
            id: 5,
            title: "Board 5",
            owner: "Person 5",
            cards: [
                {
                    message: "411rw",
                    likes_count: 0
                },
                {
                    message: "etewr",
                    likes_count: 0
                }
            ]
        },
        {
            id: 6,
            title: "Board 6",
            owner: "Person 6",
            cards: [
                {
                    message: "yiti",
                    likes_count: 0
                },
                {
                    message: "sadgf",
                    likes_count: 0
                }
            ]
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [currentBoards, setCurrentBoards] = useState(BOARDS_DATA.slice(0,4));
    const [cards, setCards] = useState(currentBoards[0].cards);
    
    // Move to the next or prev set of boards on click
    const boardsChange = (direction) => {
        const index = (direction === "next" && ((startIndex + 4) < BOARDS_DATA.length)) ? startIndex + 4
                    : (direction === "prev" && (startIndex - 4 >= 0)) ? startIndex - 4
                    : 0;
        setStartIndex(index);
        setCurrentBoards(BOARDS_DATA.slice(startIndex, startIndex + 4)); 
    };

    const chooseBoard = (id) => {
        // This will be replaced will an API call to get cards by board id
        const board = currentBoards.filter((board) => board.id === id);
        const newCards = board[0].cards;
        setCards(newCards);
    };

    const deleteCard = (id) => {
        // This wiill be replace with an API call: delete card by id, then update state
        const newCards = cards.filter((card) => card.id !== id);
        setCards(newCards);
    }

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
                    <div className='sub-container'>
                        <BoardList boards={currentBoards} chooseBoard={chooseBoard} deleteCard={deleteCard} />
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