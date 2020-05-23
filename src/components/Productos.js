import React, { Component } from 'react';
import NavBar from './NavBar';
import CostoEnvio from './CostoEnvio';
import CardList from './CardList';

class Productos extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)

        this.state = ({
            db: [],
        });
    }

    componentDidMount() {
        this._isMounted = true;
        this.getProductosServer();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    getProductosServer() {
        fetch('http://localhost:9001/api/v1/instrumento/all')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ db: responseJson });
            });

    }


    render() {
        const image_url = "http://localhost:9001/api/v1/instrumento/imagen/";
        const instrumentos = this.state.db.map((instrumento, i) => {
            return (

                <CardList key={instrumento.id}
                    id={instrumento.id}
                    imagen={image_url + instrumento.imagen}
                    descripcion={instrumento.descripcion}
                    cantidadVendida={instrumento.cantidadVendida}
                    nombre={instrumento.instrumento}
                    precio={instrumento.precio}
                    marca={instrumento.marca}
                    modelo={instrumento.modelo}
                    costoEnvio={<CostoEnvio costo={instrumento.costoEnvio} />}></CardList>
            )
        })

        return (
            <React.Fragment>
                <NavBar></NavBar>
                <p></p>
                {instrumentos}
            </React.Fragment>
        )
    }
}

export default Productos
