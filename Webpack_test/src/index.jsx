import React from 'react';
import ReactDom from 'react-dom';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const appContainer = document.querySelector('#app');

let arr = ['aasd', 'sdfsdf', 'dasdas'];
let domarr = arr.map(el => <li>{ el }</li>)
let codeEl = <ol>{ domarr }</ol>

ReactDom.render(
    <div>
    codeEl
    </div>,
    appContainer
)