import React from "react";
import Checkbox from "./utility/Checkbox";

export default function TaskElement({ name, status, uIndex }) {
    return (
        <div className="task">
            <Checkbox id={"task-done-toggle-" + uIndex} checked={status == "done" ? true : false}/>
        </div>
    );
};