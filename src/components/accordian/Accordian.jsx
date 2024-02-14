

import React, { useState } from 'react'
import data from "./darta"

const Accordian = () => {
    const [selected , setSelected] = useState(null)

    const  handleaccordian  = (id)=>{
      
        setSelected(id === selected ? null : id)
   
    }

  return (
    <div className='wrpeer'>
        <div className='accordian'>

            {
                data && data.length > 0 ? (
                    data.map((datitem)=> (
                        <div className='item' onClick={()=> handleaccordian(datitem.id)}>
                             
                              <h3>{datitem.question}</h3>

                              {
                                 
                                    selected === datitem.id ? <h2>{datitem.answer}</h2> : null
                                  
                              }
                            </div>

 
                     
                    ))
                ) : (<h2>nuull</h2>)
            }
        </div>


    
           
    </div>
  )
}

export default Accordian