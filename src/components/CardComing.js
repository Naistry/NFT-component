import { getByDisplayValue } from '@testing-library/react';
import React from 'react'
import './Card.css'

function CardComing({colection}) {
  
    const day1 = new Date();
    const options = {  month: 'long', day: 'numeric', hour:'numeric' };

    const createDate = (data)=>{
        return new Date(data)
    }

    const getDate = (date, number) =>{
        return createDate(date).toLocaleString('en-US', options).split('at')[number]
    }

    const getMouth =(data)=>{
        return getDate(data,0).trim()
    }

    const getHour= (data)=>{
        return getDate(data,1).trim(2).toString().replace(/\s+/g, '').toLowerCase()
    }

    const calcularTerminacion = (data) => {

        const date = getDate(data,0).split(' ')[1];

        switch (date) {
            case '1'|| '21' || '31': return 'st';
            break;

            case '2' || '22': return 'nd';
            break;

            case '3' || '23': return 'rd';
            break;

            default: return 'th';
            break;
        }
    }

    const getDay = (data)=>{
        return (((Math.abs(day1-new Date(data.split(' ')[0])))/(1000 * 3600 * 24)).toFixed() -1)

    }

  
  

  return (
    <>
    {colection.map((data,i)=>{
       if( data.state==='coming_wl'){
        
        return(
            <div key={i} className='card'>
                <div className="first-row">
                    <p className="position">{i-14}</p>
                    <img className='card-img' src={data.url} alt="imagen usuario" />
                    <div className="first-row-text">
                        <p className="user-name">{data.collection_name}</p>
                        <p className="entry-text">Listed on {getMouth(data.go_live_wl)} {calcularTerminacion(data.go_live_wl)}, {getHour(data.go_live_wl)} </p>
                    </div>
                </div>

                <div className="second-row">
                    <p className="days-left">In {getDay(data.go_live_wl)} {getDay(data.go_live_wl) === 1 ? 'day' : 'days'}</p>
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

