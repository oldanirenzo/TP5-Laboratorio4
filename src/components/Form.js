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

    async componentDidMount() {
        if (this.props.match.params.id) {
            const res = await axios.get(
                'http://localhost:9001/api/v1/instrumento/find/' + this.props.match.params.id
            );
            this.setState({
                instrumento: res.data.instrumento,
                marca: res.data.marca,
                modelo: res.data.modelo,
                imagen: res.data.imagen,
                precio: res.data.precio,
                costoEnvio: res.data.costoEnvio,
                cantidadVendida: res.data.cantidadVendida,
                descripcion: res.data.descripcion,
                edit: true,
                id: this.props.id
            })
        }
    }

    submitHandler = () => {

        // Si edit es verdadero, actualiza, sino, agrega
        if (this.state.edit) {

            // Actualizo el producto perteneciente al id que mando
            axios({
                method: 'PUT',
                url: 'http://localhost:9001/api/v1/instrumento/put/' + this.props.match.params.id,
                data: {
                    "id": this.props.match.params.id,
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
                .catch(error => {
                    console.log('Error ' + error);
                })
            //Creo un FormData donde guardare la imagen
            const fd = new FormData();

            // Guardo la imagen, y su nombre para mandar
            fd.append('file', this.state.imagen, this.state.imagen.name);

            // Envio la imagen al servidor
            axios.post('http://localhost:9001/api/v1/instrumento/uploadFile', fd)
                .then(res => {
                    console.log(res)
                })
                .then(response => {
                    this.setState({ imagen: null })
                })
                .then(() => {
                    window.location.href = "/formulario"
                })
        } else {
            // npm install axios -save  
            // Axios es un paquete que es util para hacer llamadas al servidor.
            // Mando todos los datos para que se guarden en el servidor
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
                .catch(error => {
                    console.log('Error ' + error);
                })

            //Creo un FormData donde guardare la imagen
            const fd = new FormData();

            // Guardo la imagen, y su nombre para mandar
            fd.append('file', this.state.imagen, this.state.imagen.name);

            // Envio la imagen al servidor
            axios.post('http://localhost:9001/api/v1/instrumento/uploadFile', fd)
                .then(res => {
                    console.log(res)
                })
                .then(response => {
                    this.setState({ imagen: null })
                })
                .then(() => {
                    // Vuelvo al formulario, asi se limpian los campos
                    window.location.href = "/formulario"
                })
        }


    }
    // Agrego los atributos que manda el usuario
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    // Agrego los archivos de imagen
    imagenChange = (e) => {
        this.setState({
            [e.target.name]: e.target.files[0] //Es un array, y me traigo el primero, el cual yo cargo
        });
    }

    render() {
        return (
            <React.Fragment>
                <NavBar></NavBar>

                <div className="container w-50 pt-3">
                    <form onSubmit={this.submitHandler} className="form-group" encType="multipart/form-data" id="formNuevo">
                        <label className="col-form-label col-form-label-sm">Instrumento:</label>
                        <input className="form-control" type="text" placeholder="Nombre producto" name="instrumento" id="instrumento" defaultValue={this.state.instrumento} onChange={this.handleInputChange}></input>

                        <br />

                        <label className="col-form-label col-form-label-sm">Descripcion:</label>
                        <textarea className="form-control" type="text" placeholder="Descripcion producto" name="descripcion" id="descripcion" defaultValue={this.state.descripcion} onChange={this.handleInputChange}></textarea>

                        <br />

                        <label className="col-form-label col-form-label-sm">Marca:</label>
                        <input className="form-control" type="text" placeholder="Marca" name="marca" id="marca" defaultValue={this.state.marca} onChange={this.handleInputChange}></input>

                        <br />

                        <label className="col-form-label col-form-label-sm">Modelo:</label>
                        <input className="form-control" type="text" placeholder="Modelo" name="modelo" id="modelo" defaultValue={this.state.modelo} onChange={this.handleInputChange}></input>

                        <br />

                        <label className="col-form-label col-form-label-sm">Precio del producto:</label>
                        <input className="form-control" type="number" placeholder="Precio producto" name="precio" id="precio" defaultValue={this.state.precio} onChange={this.handleInputChange}></input>

                        <br />

                        <label className="col-form-label col-form-label-sm">Costo de envio:</label>
                        <input className="form-control" type="number" placeholder="Costo de envio" name="costo" id="costo" defaultValue={this.state.costo} onChange={this.handleInputChange}></input>

                        <br />

                        <label className="col-form-label col-form-label-sm">Cantidad vendida:</label>
                        <input className="form-control" type="number" placeholder="Cantidad vendidos" name="cantidadVendida" id="cantidadVendida" defaultValue={this.state.cantidadVendida} onChange={this.handleInputChange}></input>

                        <br />

                        <input type="file" className="form-control-file" name="imagen" id="imagen" onChange={this.imagenChange} required />

                        <br />

                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </form >
                </div>
            </React.Fragment>
        )
    }
}
export default Form