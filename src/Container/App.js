import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import CardList from '../Components/CardList'
import SearchCard from '../Components/SearchCard'
import Scroll from '../Components/Scroll'
import 'tachyons';
import { setSearchField, requestRobot } from '../action.js'

const mapStateToProps = (state) => {
  return {
    //searchField:state.searchRobot.searchField //(it can be like this but i will keep defining state path)
    searchField: state.searchRobot.searchField,  //better like this, so i won't define state path
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    onSearchedChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobot: () => dispatch(requestRobot())
  }
}
class App extends React.Component {
  /*
  constructor(){
    super()
    this.state= {
      robots:[]
    }
  }
This wont br needed because we using redux to get state
  */
   componentDidMount(){
    /*
     fetch('http://dummy.restapiexample.com/api/v1/employees')
     .then(response => {
       return response.json();
     })
     .then(user => {
        this.setState({robots:user.data});
     })*/
     this.props.onRequestRobot();

   }
  render(){
    const { searchField, onSearchedChange, robots, isPending}=this.props;
    const robotFilter = robots.filter(robots =>{
    return robots.employee_name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
     <h1>Loading</h1> :
    (
      <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchCard onSearchChange={onSearchedChange}/>
      <Scroll>
<CardList robots={robotFilter}/>
      </Scroll>
   </div>
  );
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
