import React, {Component} from 'react';
import './App.css';

//This is a component that is used to render the Header of the app.

class Header extends Component{
	render() {
		return(
		<div>
		<h1> Looking for a game to play? </h1>
		<h2> You have come to the right place! </h2>
		<p1> You can use the drop down menus to filter games or the button to sort them alphabetically. </p1>
		</div>
		)
	}
}

export default Header;