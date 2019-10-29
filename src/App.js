import React , {Component} from 'react';
import CardList from './CardList';
import {robots} from './Robots';
import SearchBox from './SearchBox'

class App extends Component {
	constructor (){
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearch = (event) =>{
		this.setState({ searchfield: event.target.value})	
	}

	render() {
		const filterRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		  <div className='tc'>
		  	<h1 className='f1'>MY ROBOT FRIENDS</h1>
		  	<SearchBox search={this.onSearch} />
			<CardList robots={filterRobots} />
		  </div>	

		);
	}

}

export default App;
