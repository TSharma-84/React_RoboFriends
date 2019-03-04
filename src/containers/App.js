import React, { Component } from 'react';
import CardArray from '../components/cardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: [],
			searchField:''
		}
	}
		componentDidMount() {
			fetch('https://jsonplaceholder.typicode.com/users') 
				.then(response=>response.json())
				.then(users => this.setState({robots:users}));
		
		} 
	
	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	render(){
		const filteredRobot = this.state.robots.filter(robot =>{
			return  robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
   		 })
		if(this.state.robots.length === 0){
			return <h1>Loading</h1>
		}
		else{
			return(
			<div className = 'tc'>
					<h1 className ='f1 mb1'>Robo Friends</h1>
					<SearchBox className ='f1 mb2' searchChange = {this.onSearchChange} />

					<Scroll>
						<CardArray robots = {filteredRobot}/>	
					</Scroll>
					
			</div>);
		}
	}
}

export default App; 