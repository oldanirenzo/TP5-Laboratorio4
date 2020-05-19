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
                <a className="navbar-brand" href="/home">Home</a>
                <a className="navbar-brand" href="/dondeEstamos">Donde Estamos</a>
                <a className="navbar-brand" href="/productos">Productos</a>
                <a className="navbar-brand" href="/formulario">Formulario</a>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </nav>
        )
    }
}

export default NavBar
