import React from 'react';
import css from '../index.css';
const moment = require('moment');

const AddTodo = (props) => {
    const { addTodo } = props

    var firstName = '';
    var comment = '';

    const getData = () => {
        const data = new Date();
        return moment(data).format('dddd, Do MMMM YYYY, HH:mm:ss');
    }

    return (
        <div>
            <input type='text'
                className="news_text"
                placeholder='Ваше имя'
                onChange={ev => {
                    firstName = ev.target.value;
                    getData();
                }}
            />
            <input type='text'
                className="news_text"
                placeholder='Написать комментарий'
                onChange={ev => {
                    comment = ev.target.value;
                }}
            />
            <button className="news_but"
                onClick={ev => {
                    ev.preventDefault();
                    var result = comment.search('(<([^>]+)>)');
                    var texName = firstName.search('(<([^>]+)>)');
                    if (result !== -1 || texName !== -1)
                        return;

                    addTodo(firstName, comment, getData());
                    var inputs = document.getElementsByClassName('news_text');
                    for (var i = 0; inputs.length > i; i++) {
                        inputs[i].value = '';
                    }
                }}>
                Отправить
</button>

        </div>

    );
}

export default AddTodo; 