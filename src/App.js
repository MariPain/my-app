import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Carrito de la compra',
      subtitle: 'Valor total de la compra',

      precioTotal: 0,
      products: [{
          id: 1,
          image: 'neo.jpg',
          tite: 'Moto Neo',
          text: 'La pequeña gigante. No necesita permiso de conducción',
          value: '35',
          currency: '€',
          quantity: 0,
        },
        {
          id: 2,
          image: 'maera.jpg',
          tite: 'Moto Maera',
          text: 'Modelo biodegradable. No exponer a temperaturas elevadas ni a humedad superior al 8%',
          value: '150',
          currency: '€',
          quantity: 0,
        },
        {
          id: 3,
          image: 'HondaRuckusCustom.jpg',
          tite: 'Honda Motra',
          text: 'Manejable y dinamica. Genial para los meses de cuarentena',
          value: '300',
          currency: '€',
          quantity: 0,
        }
      ]
    }
  }

  addProduct = (id) => {

  }

  render() {
    const {
      title,
      subtitle,
      products
    } = this.state;


    const imprimirProducto = (product) => {
      const {image, title, text, value, currency, quantity} = product
      return (
        <article>
          <img src={image}/>
          <h1>{title}</h1>
          <p>{text}</p>
          <p>{value}</p>
          <p>{quantity} {currency}</p>
        </article>
      )
    }

    return (
      <main>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {products.map(imprimirProducto)}
      </main>
    )
  }
}

export default App;
