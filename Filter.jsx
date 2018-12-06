import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';


//This class contains most of the functionality for this app. This component takes in List. Multiple functions
//have been defined in this class that are used to filter the list of games and also sort them. Input features
//such as dropdown menus or buttons have been incorporated to give users agency over filtering or sorting. 

class Filter extends Component{
	constructor(props){
		super(props);


		this.state = {
      name: "",
			type: "",
			players: "",
      bool: false,
		};

	}


onFilter = (event) => {
	this.setState({type: event});
}

onFilterPlayers = (event) => {
  this.setState({players: event});
}   

filterItem = (item) => {
	  if (this.state.type === "All"){
     return 1;
    }

    if(item.type === this.state.type){
    return 1;
    }

    if(this.state.type === ""){
    return 1;
    }
}

filterPlayers = (item) => {
  if(item.players === this.state.players){
      return 1;
    }
    if (this.state.players === "All"){
      return 1;
    }
    if(this.state.players === ""){
     return 1;
    }
}

sortFunction = (a, b) => {
  if (a.name > b.name){
    return 1;
  }
  else if (a.name < b.name){
    return -1;
  }
  else{
    return 0;
  }
}

toggleState() {
  this.setState({bool: !this.state.bool});
}


  render(){

    return (
        <div className = "filter">

          <DropdownButton id= "typeDropdown" title={"Type"}>
            <MenuItem eventKey= "All" onSelect={this.onFilter}>All</MenuItem>
            <MenuItem eventKey= "Resource Management" onSelect={this.onFilter}>Resource Management</MenuItem>
            <MenuItem eventKey= "Strategy" onSelect={this.onFilter}>Strategy</MenuItem>
            <MenuItem eventKey= "Luck" onSelect={this.onFilter}>Luck</MenuItem>
            <MenuItem eventKey= "Tiling" onSelect={this.onFilter}>Tiling</MenuItem>
            <MenuItem eventKey= "Co-operative" onSelect={this.onFilter}>Co-operative</MenuItem>
          </DropdownButton>

          <DropdownButton id= "typeDropdown" title={"Number of Players"}>
            <MenuItem eventKey= "All" onSelect={this.onFilterPlayers}>All</MenuItem>
            <MenuItem eventKey= "At least two" onSelect={this.onFilterPlayers}>At least two</MenuItem>
            <MenuItem eventKey= "Two" onSelect={this.onFilterPlayers}>Two</MenuItem>
            <MenuItem eventKey= "More than two" onSelect={this.onFilterPlayers}>More than two</MenuItem>
          </DropdownButton>   

          <button onClick = {this.toggleState.bind(this)}> Sort Alphabetically </button>
           <List items = {this.state.bool?
                          this.props.items.filter(this.filterItem).filter(this.filterPlayers).sort(this.sortFunction):
                          this.props.items.filter(this.filterItem).filter(this.filterPlayers)} />
        </div>


    );
  }

}

export default Filter;