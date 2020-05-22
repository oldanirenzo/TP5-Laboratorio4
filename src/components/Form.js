import React, { Component } from 'react'
import axios from 'axios';
import NavBar from './NavBar';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            instrumento: '',
            descripcion: '',
            marca: '',
            modelo: '',
            precio: '',
            costo: '',
            cantidadVendida: '',
            imagen: null
        }
    }

    submitHandler = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        e.preventDefault();
        console.log(this.state);

        //npm install axios -save  
        //Axios es un paquete que es util para hacer llamadas al servidor.
        axios({
            method: 'post',
            url: 'http://localhost:9001/api/v1/instrumento/save',
            data: {
                "cantidadVendida": this.state.cantidadVendida,
                "costoEnvio": this.state.costo,
                "descripcion": this.state.descripcion,
                "imagen": this.state.imagen.name,
                "instrumento": this.state.instrumento,
                "marca": this.state.marca,
                "modelo": this.state.modelo,
                "precio": this.state.precio
            }
        })
            .then(response => {
                console.log(JSON.stringify(response));

                this.setState({ instrumento: '' });
                this.setState({ descripcion: '' });
                this.setState({ marca: '' });
                this.setState({ modelo: '' });
                this.setState({ precio: '' });
                this.setState({ costo: '' });
                this.setState({ cantidadVendida: '' });
            })
            .catch(error => {
                console.log('Error' + error);
            })
        const fd = new FormData();
        fd.append('file', this.state.imagen, this.state.imagen.name);
        axios.post('http://localhost:9001/api/v1/instrumento/uploadFile', fd)
            .then(res => {
                console.log(res)
            })
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    imagenChange = (e) => {
        this.setState({
            [e.target.name]: e.target.files[0]
        });
    }


    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>
                
                <div className="container w-50 pt-3">
                    <form onSubmit={this.submitHandler} className="form-group" encType="multipart/form-data">
                        <label className="col-form-label col-form-label-sm">Instrumento:</label>
                        <input className="form-control" type="text" placeholder="Nombre producto" name="instrumento" id="instrumento" onChange={this.handleInputChange}></input>
                        <br /><label className="col-form-label col-form-label-sm">Descripcion:</label>
                        <textarea className="form-control" type="text" placeholder="Descripcion producto" name="descripcion" id="descripcion" onChange={this.handleInputChange}></textarea>
                        <br /><label className="col-form-label col-form-label-sm">Marca:</label>
                        <input className="form-control" type="text" placeholder="Marca" name="marca" id="marca" onChange={this.handleInputChange}></input>
                        <br /><label className="col-form-label col-form-label-sm">Modelo:</label>
                        <input className="form-control" type="text" placeholder="Modelo" name="modelo" id="modelo" onChange={this.handleInputChange}></input>
                        <br /><label className="col-form-label col-form-label-sm">Precio del producto:</label>
                        <input className="form-control" type="number" placeholder="Precio producto" name="precio" id="precio" onChange={this.handleInputChange}></input>
                        <br /><label className="col-form-label col-form-label-sm">Costo de envio:</label>
                        <input className="form-control" type="number" placeholder="Costo de envio" name="costo" id="costo" onChange={this.handleInputChange}></input>
                        <br /><label className="col-form-label col-form-label-sm">Cantidad vendida:</label>
                        <input className="form-control" type="number" placeholder="Cantidad vendidos" name="cantidadVendida" id="cantidadVendida" onChange={this.handleInputChange}></input>
                        <br />

                        <input type="file" className="form-control-file" name="imagen" id="imagen" onChange={this.imagenChange} />

                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form >
                </div>


            </React.Fragment>
        )
    }
}

export default Form
