import { React, useState } from "react";
import './Checkbox.css';

export default function Checkbox({ customClass, id, checked }) {
    const [isChecked, setIsChecked] = useState(checked);

    return (
        <label
            className={"checkbox" + (customClass ? customClass : "")}
            htmlFor={id} data-ischecked={isChecked}>
            <input
                onChange={() => setIsChecked(!isChecked)}
                checked={isChecked}
                type="checkbox"
                id={id} className="checkbox-input"/>
            <div className="checkbox-box"></div>
        </label>
    );
};