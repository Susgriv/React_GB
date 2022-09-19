import React from 'react';
import './App.css'; // Импортируем файлы со стилями

function App() {
    const messageName = 'Сообщешие'
    return (
        <div className="App">
            <MyHeader message={messageName} id = {1}/>
        </div>
    )
}

export default App;


const MyHeader = ({message,id}) => {
    return (
        <div className="header">
            Мой первый React проект!!!
            <h3>Данное {message}!!!</h3>
        </div>
    )
}

// function App(props) {
//     // И устанавливаем класс
//     return (
//         <div className="App">
//             <header className="App-header">
//                 Мой первый React проект!!!
//                 <h3>{props.name}!!!</h3>
//             </header>
//         </div>
//     );
// }
//
// export default App;
//
// const Message = ({}) => {
//     return(
//         <div className='header'>
//             <h1>Привет Мир!!!</h1>
//         </div>
//     )
// }