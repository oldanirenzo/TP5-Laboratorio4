import React, { Component } from 'react'
import axios from 'axios'

class CardList extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)

        this.state = {
            id: ''
        }
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    borrar = (e) => {

        axios({
            method: 'DELETE',
            url: require = ('http://localhost:9001/api/v1/instrumento/delete/' + this.props.id)
        })
            .then(res => {
                console.log(res)
            })
        document.getElementById("tarjetaProductos").reset();
            window.location.replace('')

    }


    render() {
        return (
            <form id="tarjetaProductos">
                <div className="card border-dark mb-3">
                    <div className="row no-gutters" >
                        <div className="col-md-2" >
                            <a href={"/detalleProducto/" + this.props.id}>  <img src={this.props.imagen} className="card-img" alt={this.props.descripcion} style={{ width: "400px" }} /> </a>
                        </div>
                        <div className="col-md-5">
                            <div className="card-body text-center">
                                <h2 className="card-title"><b>{this.props.nombre}</b></h2>
                                <br />
                                <h3 className="card-text">$ {this.props.precio}</h3>
                                <p className="card-text" className="text-danger">{this.props.costoEnvio}</p>
                                <p className="card-text"><small className="text-muted">{this.props.cantidadVendida} vendidos</small></p>
                                <div className="btn-group-vertical">
                                    <button type="button" className="btn btn-danger" onClick={this.borrar}>Borrar</button>
                                    <button type="button" className="btn btn-primary" >Modificar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </form>)
    }
}

export default CardList
