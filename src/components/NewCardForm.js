import { useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';

const INITIAL_CARD = {
    message: ""
};

const NewCardForm = ({addCard}) => {
    const [formCard, setFormCard] = useState(INITIAL_CARD);

    const handleChange = (event) => {
        const newFormCard = {
            ...formCard,
            [event.target.name]: event.target.value
        };
        console.log(event.target);
        setFormCard(newFormCard);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addCard(formCard);
        setFormCard(INITIAL_CARD);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="message">Message:</label><br/>
            <input
                required
                type="text"
                id="message"
                name="message"
                value={formCard.message}
                onChange={handleChange}
            /><br/>
            <input type="submit" value="submit" />
        </form>
    )
};

NewCardForm.propTypes = {
    addBoard: PropTypes.func.isRequired
};

export default NewCardForm;