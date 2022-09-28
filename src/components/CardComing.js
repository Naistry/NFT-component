import React from 'react'
import './Card.css'

function CardComing({colection}) {
  
    const day1 = new Date();
    var options = {  month: 'long', day: 'numeric', hour:'numeric' };

    const calcularTerminacion = (data) => {

        var options = {  month: 'long', day: 'numeric', hour:'numeric' };

        switch ((new Date(data).toLocaleString('en-US', options)).split('at')[0].split(' ')[1]) {
            case '1': return 'st';
            break;

            case '2': return 'nd';
            break;

            case '3': return 'rd';
            break;

            default: return 'th';
            break;
        }
    }
    
    
  return (
    <>
    {colection.map((data,i)=>{
       if( data.state==='coming_wl'){
        console.log((new Date(data.go_live_wl).toLocaleString('en-US', options)).split('at')[0].split(' ')[1])
        return(
            <div key={i} className='card'>
                <div className="first-row">
                    <p className="position">{i-14}</p>
                    <img className='card-img' src={data.url} alt="imagen usuario" />
                    <div className="first-row-text">
                        <p className="user-name">{data.collection_name}</p>
                        <p className="entry-text">Listed on {(new Date(data.go_live_wl).toLocaleString('en-US', options)).split('at')[0].trim()} {calcularTerminacion(data.go_live_wl)}, {(new Date(data.go_live_wl).toLocaleString('en-US', options)).split('at')[1].trim(2).toString().replace(/\s+/g, '').toLowerCase()} </p>
                    </div>
                </div>

                <div className="second-row">
                    <p className="days-left">In {((Math.abs(day1-new Date(data.go_live_wl.split(' ')[0])))/(1000 * 3600 * 24)).toFixed() -1} {(((Math.abs(day1-new Date(data.go_live_wl.split(' ')[0])))/(1000 * 3600 * 24)).toFixed() -1) === 1 ? 'day' : 'days'}</p>
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

