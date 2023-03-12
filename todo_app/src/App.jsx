import './App.css';
import Header from './components/Header';
import Content from './components/Content';

var list = {
    name: '',
    tasks: [
        {
            name: 'Hello World!',
            status: 'todo',
            uIndex: 0
        },
        {
            name: '',
            status: 'done',
            uIndex: 1
        }
    ]
};

export default function App() {
    return (
        <div id='app-container'>
            <Header web/>
            <Content name={list.name} tasks={list.tasks}/>
        </div>
    );
};
