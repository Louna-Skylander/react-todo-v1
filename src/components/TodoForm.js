/* ============================================================================
 *      TODO LIST: TODOFORM.JS
 * ========================================================================= */

// FIRST STEP is coding in TodoForm.js
// Install Extension: ES7 React/Redux/...
// auto-writing (emmet): rfce

/**************************************/
/*            IMPORT                  */
/**************************************/

import React, { useState, useEffect, useRef } from 'react';

/**************************************/
/*       FUNCTION: TodoForm           */
/**************************************/

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : ''); // ('') => Input-text

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });


    const handleChange = e => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({ 
            id: Math.floor(Math.random() * 10000), 
            text: input 
        }); 

        setInput(''); // text on input disappear when you click the button

    };

    return (

    //---------RETURN TODO FORM---------------------------------------------------------------//

        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <> 
            <input
                type='text'
                placeholder='Update your item'
                value={input}
                name='text'
                className='todo-input edit'
                onChange={handleChange}
                ref={inputRef} />

            <button className='todo-button edit'>Update</button>
            </>) : ( 
            <>
            <input
                type='text'
                placeholder='New todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputRef} />

            <button className='todo-button'> Add + </button>
            </>
            )}

        </form>
    );
}

/**************************************/
/*            EXPORT                  */
/**************************************/

export default TodoForm;

