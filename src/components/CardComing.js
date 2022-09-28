import React from 'react'
import './CardComing.css'

function CardComing({colection}) {
    
    const day1 = new Date();
    
  return (
    <>
    {colection.map((data,i)=>{
       if( data.state==='coming_wl'){
        console.log()
        return(
            <div key={i} className='card'>
                <div className="first-row">
                    <p className="position">{i-14}</p>
                    <img className='card-img' src={data.url} alt="imagen usuario" />
                    <div className="first-row-text">
                        <p className="user-name">{data.collection_name}</p>
                        <p className="entry">Listed on {data.go_live_wl}</p>
                    </div>
                </div>

                <div className="second-row">
                    <p className="days-left">In {((Math.abs(day1-new Date(data.go_live_wl.split(' ')[0])))/(1000 * 3600 * 24)).toFixed() -1} days</p>
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

export default CardComing

