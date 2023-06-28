import { useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import './NewForm.css';

const INITIAL_BOARD = {
    title: "",
    owner: ""
};

const NewBoardForm = ({addBoard}) => {
    const [formBoard, setFormBoard] = useState(INITIAL_BOARD);
    const [show, setShow] = useState(true);
    
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
        <div className='sub-container-form'>
            { show ? (             
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title"><h2>Board Name:</h2></label><br/>
                    <input className='input-button'
                        required
                        type="text"
                        id="title"
                        name="title"
                        value={formBoard.title}
                        onChange={handleChange}
                    /><br/>
                    <label htmlFor="owner"><h2>Created By:</h2></label><br/>
                    <input className='input-button'
                        required
                        type="text"
                        id="owner"
                        name="owner"
                        value={formBoard.owner}
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

NewBoardForm.propTypes = {
    addBoard: PropTypes.func.isRequired
};

export default NewBoardForm;