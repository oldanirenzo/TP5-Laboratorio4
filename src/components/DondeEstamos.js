import React, { Component } from 'react'
import NavBar from './NavBar'
import mapa from '../assets/images/Mapa.jpeg'

class DondeEstamos extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <img src={mapa} style={{ height: '47rem', width: '104rem', resizeMode: 'auto'}} alt=""/>
            </React.Fragment>
        )
    }
}

export default DondeEstamos
