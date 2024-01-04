import React from 'react'
import "./style.css"

const page = () => {
  return (
    <div className='card'>
        <form className='input_card'>
             <input type='text' className='input'  placeholder='type languge name'/><br/>
             <input type='text' className='input'  placeholder='type languge text'/><br/>
             <button className='btn'>ADD Card</button>
        </form>
    </div>
  )
}

export default page