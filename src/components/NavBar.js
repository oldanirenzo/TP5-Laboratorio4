import React, { Component } from 'react'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/home">Musical Hendrix</a>
                <a className="navbar-brand" href="/dondeEstamos">Donde Estamos</a>
                <a className="navbar-brand" href="/productos">Productos</a>
                <a className="navbar-brand" href="/formulario">Formulario</a>
            </nav>
        )
    }
}

export default NavBar
