import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      texto: 'Te vendo la moto',
    }
    // this.actualizar = this.actualizar.bind(this)
  }
  // actualizar( evento ) {
  actualizar = (evento) => {
    console.log(evento.target.value)
    this.setState({texto: evento.target.value})
  }
  render(){
    const {texto} = this.state;
    return (
      <>
        <Titulo txt={texto}/>
        <Input cambiaElEstado={this.actualizar}/>
        <Lista />
      </>
    )
  }
}
class Lista extends React.Component {
  constructor() {
    super();
      this.state = {
        coleccion: [
          {
            image: 'neo.jpg',
            title: 'Moto Neo',
            text: 'La pequeña gigante. No necesita permiso de conducción',
            value: '35€'
          },
          {
            image: 'otra.jpg',
            title: 'Moto dos',
            text: 'La pequeña gigante. No necesita permiso de conducción',
            value: '40€'
          },
          {
            image: 'tres.jpg',
            title: 'Moto gp',
            text: 'La pequeña gigante. No necesita permiso de conducción',
            value: '300€'
          }
        ]
      }
  }
  render() {
    const {coleccion} = this.state;
    return (
      <ul>
      {coleccion.map((moto, index) => {
        return <li key={index}>{moto.image}, {moto.title}, {moto.text}, {moto.value}</li>
      })}
      </ul>
    )
  }
}
class Input extends React.Component {
  render() {
    const {cambiaElEstado} = this.props;
    return (
      <input type="number" onChange={cambiaElEstado}/>
    )
  }
}
class Titulo extends React.Component {
  render() {
    const {number} = this.props
    return (

      <p>{number}</p>
    )
  }
}
export default App;
