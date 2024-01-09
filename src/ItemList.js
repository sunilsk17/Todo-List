import React from 'react'
import LineItem from './LineItem';
const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
           item={item}
           key = {item.id}//else console warning, we need to send key to child, key is used to identify unique item
           handleCheck={handleCheck}
           handleDelete={handleDelete}
        />

      ))}
    </ul>
  )
}

export default ItemList