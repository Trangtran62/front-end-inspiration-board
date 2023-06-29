import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardList from "../components/CardList.js";
import NewCardForm from "../components/NewCardForm.js";
import axios from "axios";
import "./Page.css";
import Swal from "sweetalert2";

const CardPage = () => {
    const [cardsData, setCardsData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const API = "https://inspiration-board-api.onrender.com";
    const location = useLocation();
    const boardId = location.state?.boardId;
    const boardName = location.state?.boardName;

    const getAllCards = async () => {
        await axios
            .get(`${API}/cards/${boardId}`)
            .then((result) => {
                setCardsData(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getAllCards();
    }, []);

    const initialCurrentCards = cardsData.slice(0,4);
    const [currentCards, setCurrentCards] = useState(initialCurrentCards);

    // Move to the next or prev set of cards to display
    const cardChange = (direction) => {
        const index = (direction === "next" && ((startIndex + 4) < cardsData.length)) ? startIndex + 4
                    : (direction === "prev" && (startIndex - 4 >= 0)) ? startIndex - 4
                    : 0;
        setStartIndex(index);
        setCurrentCards(cardsData.slice(startIndex, startIndex + 4)); 
    };

    const deleteCard = (id) => {
        axios
            .delete(`${API}/cards/${id}`)
            .then(() => {
                getAllCards();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const postCard = async (card) => {
        await axios
            .post(`${API}/cards`, {board_id: boardId, ...card})
            .then(() => {
                getAllCards();
            })
            .catch((err) => {
                console.log(err);
                Swal.fire(err.response.data.details);
            });
    };

    const likeCount = (card, id) => {
        axios
            .patch(`${API}/cards/${id}`, card)
            .then(() => {
                getAllCards();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="page">
            <div className="board-page-title">Card Board</div>
            <div className="board-body">
                <div className="board-div">
                    <div className="sub-page-title">{boardName} Cards</div>
                    <p>Toggle the arrow buttons below to show cards</p>
                    <CardList cards={currentCards} deleteCard={deleteCard} likeCount={likeCount} boardId={boardId} />
                    <div>
                        <button onClick={() => cardChange("prev")}>↩ </button>
                        <button onClick={() => cardChange("next")}> ↪</button>
                    </div>
                </div>
                <div className="board-div">
                    <div className="sub-page-title">New Card</div>
                    <NewCardForm addCard={postCard} boardId={boardId} />
                </div>
            </div>
        </div>
    );
};

export default CardPage;