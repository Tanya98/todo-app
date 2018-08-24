import React from 'react';
import PropTypes from 'prop-types';
import css from '../index.css';
import AddTodo from './add-todo';
const moment = require('moment');

const TodoList = (props) => {
    const { todoes, removeTodo, addTodo } = props;


    return (
        <div>
            <h2>Виджет комментариев</h2>
            <form className="article">
                <ol>
                    {
                        todoes.map(todo => {
                            return (
                                <li key={todo.id}>
                                    <p className="name">
                                        {todo.name}<span className="data">
                                            {todo.time}
                                        </span>
                                    </p>
                                    <span>{todo.comment}
                                    </span>

                                    <button className="remove"
                                        onClick={ev => {
                                            ev.preventDefault();
                                            removeTodo(todo.id);
                                        }}
                                    >
                                        Удалить
                                    </button>
                                </li>
                            );
                        })
                    }
                </ol>
                <AddTodo addTodo={addTodo} />
            </form>
        </div>
    );
    console.log(todoes);

}


export default TodoList;