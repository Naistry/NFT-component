import React from 'react'
import './CardComing.css'

function CardComing() {
  return (
        <div className='card'>
                <div className="first-row">
                    <p className="position">1</p>
                    <img className='card-img' src="https://www.futcards.com.br/wp-content/uploads/2020/05/martin-palermo-argentina.jpg" alt="imagen usuario" />
                    <div className="first-row-text">
                        <p className="user-name">marteeeeeeen</p>
                        <p className="entry">Listed on October 4th, 5pm</p>
                    </div>
                </div>

                <div className="second-row">
                    <p className="days-left">In 16 days</p>
                </div>
        </div>
  )
}

export default CardComing