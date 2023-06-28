import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardList from "../components/CardList.js";
import NewCardForm from "../components/NewCardForm.js";
import axios from "axios";
import "./Page.css";

const CardPage = () => {
    const location = useLocation();
    const initialCards = location.state?.cards; // Only generate data when there is state in Link
    const boardName = location.state?.boardName;

    console.log(initialCards);

    const [cardsData, setCardsData] = useState(initialCards);
    const [startIndex, setStartIndex] = useState(0);
    const [currentCards, setCurrentCards] = useState(cardsData.slice(0,4));

    // Move to the next or prev set of cards to display
    const cardChange = (direction) => {
        const index = (direction === "next" && ((startIndex + 4) < currentCards.length)) ? startIndex + 4
                    : (direction === "prev" && (startIndex - 4 >= 0)) ? startIndex - 4
                    : 0;
        setStartIndex(index);
        setCurrentCards(cardsData.slice(startIndex, startIndex + 4)); 
    };

    // Replace with API call later
    const deleteCard = (id) => {
        const newCards = cardsData.filter((card) => card.id !== id); // delete api call
        setCardsData(newCards); // get api call
    };
    
    const postCard = (card) => {
        const newCards = cardsData.push(card); // post api call
        setCardsData(newCards); // get api call
    };

    const likeCount = (updatedCard) => {
        updatedCard.likes_count += 1;
        postCard(updatedCard);
    };

    return (
        <div className="page">
            <header>
                <div className="board-page-title"><h1>Card Board</h1></div>
            </header>
            <main>
                <section>
                    <div className="sub-page-title"><h2>Cards For {boardName}</h2></div>
                    <CardList cards={currentCards} deleteCard={deleteCard} likeCount={likeCount} />
                    <div>
                        <button onClick={() => cardChange("prev")}>↩ </button>
                        <button onClick={() => cardChange("next")}> ↪</button>
                    </div>
                </section>
                <section>
                    <div className="sub-page-title"><h2>New Card</h2></div>
                    <div className="sub-container-form">
                        <NewCardForm addCard={postCard} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CardPage;