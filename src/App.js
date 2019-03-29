import React,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots'
import SearchBox from './SearchBox';
class App extends Component{
	constructor()
	{
		super();
		this.state={
			robots:robots,
			Searchfield:''

		}
	}
	
	onSearchChange=(event)=>{

	const filterRobots=this.state.robots.filter(robots=>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

	})
	console.log(filterRobots);
}


render(){
  return(
    <div className="tc">
    <h1>ROBO FRIENDS</h1>
      <SearchBox searchchange={this.onSearchChange}/>
      <CardList robots={this.state.robots}/>

    </div>

    );
}
}
export default App;