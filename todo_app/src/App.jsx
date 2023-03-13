import React from "react";
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

var list = {
    name: 'Blank List',
    tasks: [{
        name: 'Hello World!',
        status: 'done',
        uIndex: 0
    }]
};

export default function App() {
    return (
        <div id='app-container'>
            <Header web/>
            <Content listSource={list}/>
        </div>
    );
};
