import React from 'react'
import './Card.css'

function CardActive({colection}) {
   
    const getEntryPrice=(data)=>{
        const price = (Math.round(data * 100) /100).toFixed(2);

        return price;
    }
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
                            <div className="entry">
                                <p className="entry-text">Entry price: <span className="entry-price">{getEntryPrice(data.price_wl)}</span></p>
                                <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="imagen solana" className="entry-img" />
                            </div>
                        </div>
                    </div>
    
                    <div className="second-row">
                        <p className="whitelisted">Users whitelisted</p>
                        <p className="number-whitelisted"><span>{(data.users_wl).split('/')[0]}</span>/{(data.users_wl).split('/')[1]}</p>
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