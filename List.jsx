import React, {Component} from 'react';

//This component is used to render the list of games. It is a container for a filtered or sorted list.

class List extends Component{
	renderList() {
		const items = this.props.items.map(item => {
			return <li key = {item.name}> {item.name} </li>

		}
		);
		return items; 
	}

	  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
