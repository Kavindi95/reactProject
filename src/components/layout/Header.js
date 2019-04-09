import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header style={HeaderStyle}>
            <h1>ToDoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about" >About</Link>
        </header>
    )
}
const HeaderStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'

}
const linkStyle = {
    background: '#333',
    color: '#fff',
}
export default Header;