import React, { Component } from 'react'
import NavBar from './NavBar';
import CostoEnvio from './CostoEnvio';
import Card from './Card';

class DetalleProducto extends Component {
    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = ({
            db: []
        })
    }

    componentDidMount() {
        this._isMounted = true;
        this.getProductoxId();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    getProductoxId() {
        const parametroId = this.props.match.params.id;
        fetch('http://localhost:9001/api/v1/instrumento/find/' + parametroId)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ db: responseJson })
            })
    }



    render() {

        const productoEncontrado = this.state.db;
        if (Object.keys(productoEncontrado).length === 0) {
            return ("");
        }
        const image_url ="http://localhost:9001/api/v1/instrumento/imagen/"
            return (
                <React.Fragment>
                    <NavBar></NavBar>
                    <p></p>

                    <Card id={productoEncontrado.id}
                        imagen={image_url+ productoEncontrado.imagen}
                        descripcion={productoEncontrado.descripcion}
                        cantidadVendida={productoEncontrado.cantidadVendida}
                        nombre={productoEncontrado.instrumento}
                        precio={productoEncontrado.precio}
                        marca={productoEncontrado.marca}
                        modelo={productoEncontrado.modelo}
                        costoEnvio={<CostoEnvio costo={productoEncontrado.costoEnvio} />}></Card>

                </React.Fragment >
            )
    }
}

export default DetalleProducto
