import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todo extends Component {

    markComplete = () => {
        console.log('hello')
    }

    render() {
        return this.props.todo.map((tdo) =>(
            <TodoItem key= {tdo.id} tdo={tdo} markComplete={this.props.markComplete}
                      deleteTodo={this.props.deleteTodo}/>
        ));
    }
}
//PropTypes
Todo.propTypes = {
    todo: PropTypes.array.isRequired
}
export default Todo;