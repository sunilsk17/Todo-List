import React from 'react'
import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
    
  
  
  return (
   <main>
   {(items.length)? (
    <ItemList
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
    />
  ) : ( <p style={{marginTop:'2rem'}}  >Your List is Empty</p> )
 }
   </main>
    
  )
}

export default Content


// //map is a higher oder fn that can take fn as prameter. that maps the array elements as objects directly instead of using loops and we can use filter to filter the elements in the array
// const numbers = [-2,-1,0,1,2];
// const itemss = numbers.filter(n => n>=0).map(n => ({numbers:n}));
// console.log(itemss);
