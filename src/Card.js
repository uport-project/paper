import React from 'react'
import './Card.css'

const Card = props => (
  <section className="Card">
    <div className="CardBody">
      {props.children}
    </div>
    <footer className='did'>{props.did}</footer>
  </section>
)
export default Card;
