import { useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import './NewForm.css';

const INITIAL_CARD = {
    message: ""
};

const NewCardForm = ({addCard, boardId={boardId}}) => {
    const [formCard, setFormCard] = useState(INITIAL_CARD);
    const [show, setShow] = useState(true);

    const handleChange = (event) => {
        const newFormCard = {
            ...formCard,
            [event.target.name]: event.target.value
        };
        setFormCard(newFormCard);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addCard(formCard);
        setFormCard(INITIAL_CARD);
    };

    return (
        <div className='sub-container-form'>
            { show ? (
                <form onSubmit={handleSubmit}>
                <label htmlFor="message"><h2>Message:</h2></label><br/>
                <input className='input-button'
                    required
                    type="text"
                    id="message"
                    name="message"
                    value={formCard.message}
                    onChange={handleChange}
                /><br/>
                <input type="submit" value="Submit" />
            </form>
            ) : null
            }
            <span>
                <button onClick={() => setShow(false)}>Hide Form</button>
                <button onClick={() => setShow(true)}>Show Form</button>
            </span>
        </div>

    )
};

NewCardForm.propTypes = {
    addCard: PropTypes.func.isRequired,
    boardId: PropTypes.number.isRequired
};

export default NewCardForm;