/* ============================================================================
 *      TODO LIST: TODOLIST.JS
 * ========================================================================= */

// SECOND STEP is coding in TodoList.js
// auto-writing (emmet): rfce

/**************************************/
/*            IMPORT                  */
/**************************************/

import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

/**************************************/
/*       FUNCTION: TodoList           */
/**************************************/

function TodoList() {

    const [todos, setTodos] = useState([]); // [] => Array

//-------ADD TODO-----------------------------------------------------------------------//

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) { // read *1
            return;
          }

//-------NEW TODO-----------------------------------------------------------------------//          

        const newTodos = [todo, ...todos];
        
        setTodos(newTodos);
        console.log(todo, ...todos); //* todo => a todo, ...todos => all todo-list
    };

//-------UPDATE TODO--------------------------------------------------------------------//

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) { // read *1
            return;
          }

          setTodos(prev =>  prev.map(item => (item.id === todoId ? newValue : item)));
    };

//------REMOVE TODO---------------------------------------------------------------------//

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        
        setTodos(removeArr);
    }

//-------COMPLETE TODO------------------------------------------------------------------//

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

//---------RETURN TODO------------------------------------------------------------------//

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
            todos={todos} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo}
            updateTodo={updateTodo} />
        </div>
    );
}

/**************************************/
/*            EXPORT                  */
/**************************************/

export default TodoList;

//---------------------------------------------------------------------------------//

/*

*1 - /^\s*$/.test 

^: matches beginning of input
\s: matches a single character other than white space
*: matches the preceding expression 0 or more times
$: matches end of  input
1+2+3+4: matches a string that begin and end with 0 or many white spaces

*/

//---------------------------------------------------------------------------------//