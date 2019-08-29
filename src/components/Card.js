import React from 'react'

import './Card.css'

class Card extends React.Component {

  render() {
    return (
      <div className='col-4'>

        <div className='row justify-content-center'>
          <div className='col-11 card-container'>

            <div className='row justify-content-center my-3'>
              <div className='col-10'>
                <img img ='img-fluid img-card' src={'https://i.imgur.com/TZGAxfj.png'} alt={''} />
                <img imagen = 'https://i.imgur.com/TZGAxfj.png'></img>
              </div>
            </div>

            <div className='text-center px-2'>
              <h2>{this.props.img}</h2>
            <h1>{this.props.nombre}</h1>
              <h3>Estudiante</h3>
            </div>

            <div className='text-center py-3'>
              <button>Seleccionar</button>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Card;