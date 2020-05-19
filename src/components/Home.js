import React, { Component } from 'react'
import NavBar from './NavBar'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (

            <React.Fragment>
                <NavBar></NavBar>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">

                        <h1 className="display-1">Musical Hendrix</h1>
                        <p className="lead">Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</p>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Home
