import React, { Component } from 'react'

class CardList extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (

            <div className="card border-dark mb-3">
                <div className="row no-gutters">
                    <div className="col-md-2" >
                        <a href={"/detalleProducto/" + this.props.id}>  <img src={this.props.imagen} className="card-img" alt={this.props.descripcion} /> </a>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{this.props.nombre}</h2>
                            <br />
                            <h3 className="card-text">$ {this.props.precio}</h3>
                            <p className="card-text" className="text-danger">{this.props.costoEnvio}</p>
                            <p className="card-text"><small className="text-muted">{this.props.cantidadVendida} vendidos</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardList
