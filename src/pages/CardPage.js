import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardList from "../components/CardList.js";
import NewCardForm from "../components/NewCardForm.js";
import axios from "axios";
import "./Page.css";

const CardPage = () => {
    const location = useLocation();
    const initialCards = location.state?.cards; // This will be replaced with API call get cards by board id
    const boardId = location.state?.boardId;
    const boardName = location.state?.boardName;

    const filteredCards = initialCards.filter((card) => card.board_id === boardId);
    const [cardsData, setCardsData] = useState(filteredCards);
    const [startIndex, setStartIndex] = useState(0);
    const initialCurrentCards = cardsData.slice(0,4)
    const [currentCards, setCurrentCards] = useState(initialCurrentCards);

    // Move to the next or prev set of cards to display
    const cardChange = (direction) => {
        const index = (direction === "next" && ((startIndex + 4) < cardsData.length)) ? startIndex + 4
                    : (direction === "prev" && (startIndex - 4 >= 0)) ? startIndex - 4
                    : 0;
        setStartIndex(index);
        setCurrentCards(cardsData.slice(startIndex, startIndex + 4)); 
    };

    // Replace with API call later
    const deleteCard = (id) => {
        const newCards = cardsData.filter((card) => card.card_id !== id); // delete api call
        setCardsData(newCards); // get api call
    };

    const postCard = (card) => {
        const newCard = { board_id: boardId, card_id: Date.now(), likes_count: 0, ...card};
        cardsData.push(newCard); // post api call
        setCardsData(cardsData); // get api call
    };

    const likeCount = (updatedCard) => {
        updatedCard.likes_count += 1;
        const newCurrentCards = currentCards.map((card) => {
            if (card.card_id === updatedCard.card_id) {
                return updatedCard;
            } else {
                return card;
            }
        });
        setCurrentCards(newCurrentCards);
    };

    return (
        <div className="page">
            <div className="board-page-title">Card Board</div>
            <div className="board-body">
                <div className="board-div">
                    <div className="sub-page-title">{boardName} Cards</div>
                    <CardList cards={currentCards} deleteCard={deleteCard} likeCount={likeCount} />
                    <div>
                        <button onClick={() => cardChange("prev")}>↩ </button>
                        <button onClick={() => cardChange("next")}> ↪</button>
                    </div>
                </div>
                <div className="board-div">
                    <div className="sub-page-title">New Card</div>
                    <NewCardForm addCard={postCard} />
                </div>
            </div>
        </div>
    );
};

export default CardPage;