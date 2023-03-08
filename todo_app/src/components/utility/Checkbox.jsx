import { React, useState } from "react";
import './Checkbox.css';

export default function Checkbox({ id, checked }) {
    const [isChecked, setIsChecked] = useState(checked);

    return (
        <label className="checkbox" htmlFor={id}>
            <input
                onChange={() => setIsChecked(prev => !prev)}
                checked={checked}
                type="checkbox"
                id={id} className="checkbox-input"/>
            <div className="checkbox-box"></div>
        </label>
    );
};