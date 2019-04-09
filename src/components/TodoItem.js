import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '10px #ccc dotted ',
            textDecoration: this.props.tdo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const {id,title} = this.props.tdo;
        return (
            <div style={this.getStyle()}>
                <input type='checkbox' onChange={this.props.markComplete.bind(this,id)}/> {''}
                <p>{title}</p>
                <button onClick={this.props.deleteTodo.bind(this,id)} style={btnStyle}>x</button>
            </div>
        )
    }
}
//PropTypes
TodoItem.propTypes = {
    tdo: PropTypes.object.isRequired
}
//button style
const btnStyle ={
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem