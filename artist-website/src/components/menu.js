import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
export class Menu extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

    handleClick(e) {
        e.preventDefault();

        // If zooming in get to the zoomed object link
        if (e.deltaY > 0) {
            var clicked = e.target;
        }
        // On zoom out get back to home-table
        else if (e.deltaY <= 0) {
			clicked = this.clickHomeLink.children[0];
        }
        // Check link to be valid, not null or undefined
        if (clicked) {
            clicked.click();
        }
    }
	
    render () {
        return ( 
				<div onWheel={this.handleClick}>
	            {/*ref must be in div otherwise it is not a DOM element but React object			*/}
                <div  ref={(elem) => {this.clickHomeLink = elem} }>
					<Link to='/'></Link>
				</div>
                {this.props.children}
            </div> 
            );
    }

}
  
