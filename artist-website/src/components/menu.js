import React, { Component } from 'react';

// The Header creates links that can be used to navigate
// between routes.
export class Menu extends Component {

    handleClick(e) {
        e.preventDefault();

        // If zooming in get to the zoomed object link
        if (e.deltaY > 0) {
            var clicked = e.target;
        }
        // On zoom out get back to home-table
        else if (e.deltaY <= 0) {
           
        }

        // Check link to be valid, not null or undefined
        if (clicked) {
            clicked.click();
        }
    }
    render () {
        return ( <div onWheel={this.handleClick}>{this.props.children}</div> );
    }

}