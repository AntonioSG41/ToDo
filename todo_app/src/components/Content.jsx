import { React, useState } from "react";
import TaskElement from "./TaskElement";
import AddIcon from "../icons/AddIcon";
import RemoveIcon from "../icons/RemoveIcon";

export default function Content({ listSource }) {

    const [listTasks, setListTasks] = useState(listSource.tasks);

    const [listName, setListName] = useState(listSource.name ? listSource.name : '');

    

    return (
        <div id="content-container">
            <div id="task-list">
                <input type="text"
                    id="list-name"
                    placeholder="Untitlted"
                    value={listName}
                    onChange={(e) => setListName(e.currentTarget.value)}/>
                <div id="task-list-container">
                    {listTasks.map((e,i) =>
                        <TaskElement key={"task-element-" + i}
                            name={e.name}
                            status={e.status}
                            uIndex={e.uIndex}/>
                    )}
                    <div id="add-task-btn-container">
                        <button className="btn icon-btn text-icon-btn" onClick={(e) => {
                            let newTasks = listTasks;
                            newTasks.push({ name:'', status:'todo', uIndex: e.pageX});
                            setListTasks([...newTasks]);
                        }}>
                            <AddIcon size={26} strokeWidth={2}/>
                            <span>Add Task</span>
                        </button>
                        <button className="btn icon-btn text-icon-btn" onClick={(e) => {
                            let newTasks = listTasks;
                            newTasks.pop();
                            setListTasks([...newTasks]);
                        }}>
                            <RemoveIcon size={22} strokeWidth={2}/>
                            <span>Remove Task</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
