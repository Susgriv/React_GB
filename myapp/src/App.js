// import e, { text } from 'express';
import React, {useState, useEffect,} from 'react';
import './App.css'; // Импортируем файлы со стилями

function App() {
    const [messageList, setMessageList] = useState([])
    const [messageText, setMessageText] = useState({
        text: '',
        author: ''
    })
    const ROBOT = 'Test!!!'
    useEffect(() => {
        if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
            setMessageList(prev => [...prev, {text: ROBOT, author: 'robot'}])
        }
    }, [messageList]);
    return (
        <div className="App">
            <Form data={messageText} setData={setMessageText} setMessage={setMessageList}></Form>
            <div className="messageList">
                {messageList.map((e, index) =>
                    <Message text={e.text} author={e.author} key={index}/>
                )}
            </div>
        </div>
    )
}

export default App;

const Form = ({data, setData, setMessage}) => {
    const {text, author} = data
    const textForm = (elem) => {
        elem.preventDefault()
        if (text.length >= 0) {
            setMessage = (el => [...el, {text, author}])
        }
    }
    setData(
        {
            text: '',
            author: ''
        }
    );
    return (
        <form onSubmit={textForm}>
            <input placeholder='Имя' type='text' value={text}
                   onChange={(el) => {
                       setData(prev => ({...prev, text: el.target.value}))
                   }}
            />
            <input placeholder='Текст' type='text' value={author}
                   onChange={(el) => {
                       setData(prev => ({...prev, author: el.target.value}))
                    }}
            />
            <button type='submit' onClick={() => {
                   setMessage((prev) => [...prev, author]);
            }}>Кнопка</button>
        </form>
    )
}

const Message = ({author, text}) => {
    return (
        <div>
            <hr/>
                <h1> {author} </h1>
                <h6> {text} </h6>
            <hr/>
        </div>
    )
}