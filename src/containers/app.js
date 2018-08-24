import React from 'react';
import css from '../index.css';
import { connect } from 'react-redux';
import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';
import { addTodo, removeTodo } from '../actions/index';
const moment = require('moment');


let App = (props) => {

    const { todoes, addTodo, removeTodo } = props;

    return (
        <div>
            <TodoList todoes={todoes} removeTodo={removeTodo} addTodo={addTodo} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todoes: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (name, comment, time) => dispatch(addTodo(name, comment,time)),
        removeTodo: (id,index) => dispatch(removeTodo(id,index))
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;