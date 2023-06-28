import { useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';

const INITIAL_BOARD = {
    title: "",
    owner: ""
};

const NewBoardForm = ({addBoard}) => {
    const [formBoard, setFormBoard] = useState(INITIAL_BOARD);

    const handleChange = (event) => {
        const newFormBoard = {
            ...formBoard,
            [event.target.name]: event.target.value
        };
        setFormBoard(newFormBoard);
        console.log(formBoard);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addBoard(formBoard);
        setFormBoard(INITIAL_BOARD);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Board Name:</label><br/>
            <input
                required
                type="text"
                id="title"
                name="title"
                value={formBoard.title}
                onChange={handleChange}
            /><br/>
            <label htmlFor="owner">Created By:</label><br/>
            <input
                required
                type="text"
                id="owner"
                name="owner"
                value={formBoard.owner}
                onChange={handleChange}
            /><br/>
            <input type="submit" value="submit" />
        </form>
    )
};

NewBoardForm.propTypes = {
    addBoard: PropTypes.func.isRequired
};

export default NewBoardForm;