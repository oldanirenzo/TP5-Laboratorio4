import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="card border-dark mb-1" styles={{ maxwidth: "25rem" }}>
                <div className="row no-gutters">
                    <div className="col-md-4" style={{ maxwidth: "25rem" }}>
                        <img src={this.props.imagen} className="card-img" alt=''/>
                        <p>Descripcion: <br></br>{this.props.descripcion}</p>
                    </div>
                    <div className="col-md-3">
                        <div className="card-body">
                            <p className="card-text"><small className="text-muted">{this.props.cantidadVendida} vendidos</small></p>
                            <h2 className="card-title">{this.props.nombre}</h2>
                            <h3 className="card-text">${this.props.precio}</h3>
                            <br />
                            <p className="card-text">Marca: {this.props.marca}</p>
                            <p className="card-text">Modelo: {this.props.modelo}</p>
                            <p className="card-text" className="text-danger">{this.props.costoEnvio}</p>
                            <br/><br/><br/><br/>
                            <button type="button" className="btn btn-outline-primary">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
