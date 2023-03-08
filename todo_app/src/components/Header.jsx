import React from "react";
import DownloadIcon from "../icons/DownloadIcon";
import GitHubIcon from "../icons/GitHubIcon";
import TwitterIcon from "../icons/TwitterIcon";

export default function Header({ web }) {
    if (web) return (
        <div id="header">
            <div id="menu-container">
                <button className="btn">Save</button>
                <button className="btn">Save As</button>
                <button className="btn">Open</button>
                <button className="btn">New</button>
                <div className="menu-file-name">
                    <span>DirectAction_todo.tdl</span>
                </div>
            </div>

            <div id="header-link-contaienr">
                <a href="https://antoniosg.itch.io/todo" target="_blank" className="header-link header-link-main">
                    <span className="header-link-icon"><DownloadIcon/></span>
                    <span>Download App</span>
                </a>
                <a href="https://github.com/AntonioSG41/ToDo" target="_blank" className="header-link">
                    <span className="header-link-icon"><GitHubIcon/></span>
                    <span>GitHub</span>
                </a>
                <a href="https://twitter.com/Antonio_041_" target="_blank" className="header-link">
                    <span className="header-link-icon"><TwitterIcon/></span>
                    <span>Twitter</span>
                </a>
            </div>            
        </div>
    );
    else return (
        <div id="appbar">Appbar</div>
    );
};