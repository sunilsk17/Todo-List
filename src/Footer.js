import React from 'react'

const Footer = ({length}) => {
    const year=new Date();
  return (
    <footer>
      <div className="FContent">
      {length} Scheduled List {length===1 ? "item" : "items"} 
      </div>
     
      Copyright &copy; {year.getFullYear()}
      </footer>
  )
}

export default Footer