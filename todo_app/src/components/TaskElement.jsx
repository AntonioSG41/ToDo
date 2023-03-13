import { React, useState } from "react";
import Checkbox from "./utility/Checkbox";
import MoreIcon from "../icons/MoreIcon";
import RemoveIcon from "../icons/RemoveIcon";
import UpArrowIcon from "../icons/UpArrowIcon";
import DownArrowIcon from "../icons/DownArrowIcon";

export default function TaskElement({ name, status, uIndex }) {

    const [taskNameVal, setTaskNameVal] = useState(name ? name : '');

    return (
        <div className="task">
            <Checkbox
                customClass="task-done-toggle"
                id={"task-done-toggle-" + uIndex}
                checked={status == "done" ? true : false}/>
            <input type="text"
                id={"task-name-input-" + uIndex} className="task-name"
                placeholder="New task"
                value={taskNameVal}
                onChange={(e) => setTaskNameVal(e.currentTarget.value)}/>
            <button className="btn icon-btn"
                onClick={e => {
                    const menu = document.getElementById('task-more-options-' + uIndex);
                    menu.style.translate = `${e.pageX + 1}px ${e.pageY + 1}px`;
                    menu.style.display = 'block';
                    
                    const hideMenu = () => {
                        menu.style.display = 'none';
                        menu.removeEventListener('mouseleave', hideMenu);
                    };
                    menu.addEventListener('mouseleave', hideMenu);
                }
            }><MoreIcon/></button>
            <div id={'task-more-options-' + uIndex} className="context-menu">
                <div className="task-more-options-btn-container">
                    <button className="btn icon-btn text-icon-btn">
                        <RemoveIcon size={22} strokeWidth={2}/>
                        <span>Remove</span>
                    </button>
                    <button className="btn icon-btn text-icon-btn">
                        <UpArrowIcon size={22} strokeWidth={2}/>
                        <span>Move up</span>
                    </button>
                    <button className="btn icon-btn text-icon-btn">
                        <DownArrowIcon size={22} strokeWidth={2}/>
                        <span>Move down</span>
                    </button>
                </div>
            </div>
        </div>
    );
};