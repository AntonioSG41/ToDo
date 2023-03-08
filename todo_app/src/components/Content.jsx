import React from "react";
import TaskElement from "./TaskElement";

export default function Content() {
    return (
        <div id="content-container">
            <div id="task-list">
                <input type="text" id="list-name" placeholder="Untitlted"/>
                <div id="task-list-container">
                    <TaskElement name="New task" status="todo" uIndex={0}/>
                    <TaskElement name="" status="todo" uIndex={1}/>
                </div>
            </div>
        </div>
    );
};
