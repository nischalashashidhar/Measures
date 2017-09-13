import React, { Component } from 'react';

import NewMeasure from '../components/NewMeasure';
import AddToDo from '../components/AddToDo';
import ToDoList from '../components/ToDoList';
import addToDo from '../actions/action'

import { connect } from 'react-redux'


import '../assets/stylesheets/App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.onAddClick = this.onAddClick.bind(this)
  }

  onAddClick(text) {
    const {dispatch} = this.props
    dispatch(addToDo(text));
  }

  render() {
    

    return (
      <div className="App">
        <AddToDo onAddClick={this.onAddClick}/>
        <ToDoList />
      </div>
    );
  }
}

mapStateToProps(state) {
  toDoAdded: state.toDoApp;
}
export default connect()(App);
