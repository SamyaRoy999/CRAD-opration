import React from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";


import "./style.css"
const Card = () => {
  return (
    <div className='main'>
      <div className='card'>
        <div className="edit">
          <h2>C++</h2>
          <div className="icon">
            <FiEdit />
            <MdDelete />
          </div>
        </div>
        <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sit amet sit amet</p>
      </div>
      <div className='card'>
        <div className="edit">
          <h2>C++</h2>
          <div className="icon">
            <FiEdit />
            <MdDelete />
          </div>
        </div>
        <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor sit amet sit amet</p>
      </div>
    </div>
  )
}

export default Card