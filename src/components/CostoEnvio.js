import React, { Component } from 'react';

class CostoEnvio extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        if (this.props.costo === 'G') {
            return (<p className="text-success">Envio gratis a todo el pais</p>)
        } else {
            return ('Costo de envio interior de Argentina $' +this.props.costo)
        }

    }
}

export default CostoEnvio
