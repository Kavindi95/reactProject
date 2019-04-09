import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import uuid from 'node-uuid';

class App extends Component {

  state = {
    todo: [
      {
        id: uuid.v4(),
        title: 'Make tea',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Clean',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go to work',
        completed: false
      }
    ]
  }
  //Toggle complete
  markComplete = (id) => {
    this.setState({todo: this.state.todo.map(tdo => {
      if(tdo.id === id){
        tdo.completed = !tdo.completed
      }
      return tdo;
    })});
  }
  //delete Todo
  //show list which do not match with passed id
  deleteTodo = (id) => {
    this.setState({todo: [...this.state.todo.filter(tdo => tdo.id !== id)]});
  }
  addTodo = (title) => {
   const newTodo = {
     id: uuid.v4(),
     title,
     completed: false
   }
   this.setState({todo: [...this.state.todo, newTodo]})
  }

  render() {
    return (
        <Router>
      <div className="App">
        <div className="container">
          <Header/>
          <Route exact path="/" render = {props => (
              <React.Fragment>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todo todo={this.state.todo} markComplete={this.markComplete}
                        deleteTodo={this.deleteTodo}/>
              </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>

        </div>
      </div>
        </Router>
    );
  }
}

export default App;
