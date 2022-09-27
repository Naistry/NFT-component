import React from 'react'
import './Card.css'

function Card() {
  return (
        <div className='card'>
                <div className="first-row">
                    <p className="position">1</p>
                    <img className='card-img' src="https://cdn.idolbirthdays.net/images/43/juan-roman-riquelme.jpg" alt="imagen usuario" />
                    <div className="first-row-text">
                        <p className="user-name">riquelme</p>
                        <p className="entry">Entry price: 4.23</p>
                    </div>
                </div>

                <div className="second-row">
                    <p className="whitelisted">Users whitelisted</p>
                    <p className="number-whitelisted"><span>340</span>/1000</p>
                </div>
        </div>
  )
}

export default Card