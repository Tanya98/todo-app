
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import css from './index.css';
import App from './containers/app';
import { createStore } from 'redux';
import todoes from './reducers/index';
const moment = require('moment');

const getData = () => {
    const data = new Date();
    return moment(data).format('dddd, Do MMMM YYYY, HH:mm:ss');

}

const initialState = [
    { id: 1, name: 'Вова', comment: 'Запустить webpack-dev-server', time: getData() },
    { id: 2, name: 'Кира', comment: 'Написать TodoApp', time: getData() },
];

const store = createStore(todoes, initialState);

ReactDOM.render(
    <App store={store} />,
    document.querySelector('#root')
);