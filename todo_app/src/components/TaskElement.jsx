import React from "react";
import Checkbox from "./utility/Checkbox";
import MoreIcon from "../icons/MoreIcon";

export default function TaskElement({ name, status, uIndex }) {
    return (
        <div className="task">
            <Checkbox
                customClass="task-done-toggle"
                id={"task-done-toggle-" + uIndex}
                checked={status == "done" ? true : false}/>
            <input type="text" id={"task-name-input-" + uIndex} className="task-name"/>
            <button className="btn icon-btn"><MoreIcon/></button>
        </div>
    );
};