import React from 'react'
import './CardActive.css'

function CardActive({colection}) {
    console.log(colection)
  return (
    <>
        {colection.map((data, i)=>{
            if(data.state === 'live_wl'){
                return(
                    <div key={i} className='card'>
                    <div className="first-row">
                        <p className="position">{i+1}</p>
                        <img className='card-img' src={data.url} alt="imagen usuario" />
                        <div className="first-row-text">
                            <p className="user-name">{data.collection_name}</p>
                            <p className="entry">Entry price: {(Math.round(data.price_wl * 100) /100).toFixed(2)}</p>
                        </div>
                    </div>
    
                    <div className="second-row">
                        <p className="whitelisted">Users whitelisted</p>
                        <p className="number-whitelisted">{data.users_wl}</p>
                    </div>
            </div>
                )
            }else{
                return null
            }
        })}
        </>
  )
}

export default CardActive