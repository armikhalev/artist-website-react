import React from 'react';
import { Menu } from '../components/menu';

export const Zoomer = (props) => {

    function handleClick(e) {
        e.preventDefault();

        // If zooming in get to the zoomed object link
        if (e.deltaY > 0) {
            let linkName = e.target.getAttribute("data-link-name");
            var clicked = document.getElementById(linkName);
        }
        // On zoom out get back to home-table
        else if (e.deltaY <= 0) {
            clicked = document.getElementById("home-link");
        }

        // Check link to be valid, not null or undefined
        if (clicked) {
            clicked.click();
        }
    }

    return (
        <div>
            <Menu />
            <div onWheel={handleClick}>{props.children}</div>
        </div>
    );
}