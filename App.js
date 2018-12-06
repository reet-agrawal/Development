import React, { Component } from 'react';
import './App.css';
import Filter from './Filter';
import Header from './Header';

//The main app. This app displays a list of board games and lets you filter and sort them. This is the main class
//for this app and it contains the list of items. To make use of React, this app extends Components that render
//on the screen making the code more readable and better organized.

const games = [
  {name: "Monopoly", type: "Resource Management", players: "At least two"},
  {name: "Catan", type:"Resource Management", players: "More than two"},
  {name: "Scrabble", type:"Tiling", players: "At least two"},
  {name: "Pandemic", type:"Co-operative", players: "At least two"},
  {name: "Ticket to Ride", type:"Resource Management", players: "At least two"},
  {name: "Chess", type: "Strategy", players: "Two"}, 
  {name: "Clue", type: "Strategy", players: "More than two"},
  {name: "Risk", type: "Strategy", players: "At least two"},
  {name: "Life", type: "Luck", players: "At least two"},
  {name: "Battleship", type: "Luck", players: "Two"},
  {name: "Sequence", type: "Luck", players: "More than two"},
  {name: "Sorry", type: "Luck", players: "At least two"}
]; 


class App extends Component {
  render() {
    return (

      <div id="gameBox">
      <Header />
      <Filter items={games} />
      </div>
    );
  }
}

export default App;
