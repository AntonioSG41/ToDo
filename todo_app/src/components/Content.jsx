import React from "react";
import TaskElement from "./TaskElement";

export default function Content({ name, tasks }) {
    return (
        <div id="content-container">
            <div id="task-list">
                <input type="text" id="list-name" placeholder="Untitlted"/>
                <div id="task-list-container">
                    <TaskElement name="Hello World!" status="done" uIndex={0}/>
                    <TaskElement name="" status="todo" uIndex={1}/>

                </div>
            </div>
        </div>
    );
};
