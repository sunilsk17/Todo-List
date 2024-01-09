import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className='item' key={item.id} >
          <input
             type="checkbox"
             onChange={() => handleCheck(item.id)}
             checked={item.checked}
          />
          <label
          style = {(item.checked) ? {textDecoration: 'line-through'} : null}
          onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
          <FaTrashAlt 
             role="button"
             tabIndex="0"//tab button in keyboard continuity
             onClick={ () => handleDelete(item.id)}
             aria-label={`Delete ${item.item}`}//aria-label used to know what does the icon do, if any scren reader program checks it will indicates this icon as delete
             //aria-label povides a label for icon
          />

        </li>
  )
}

export default LineItem