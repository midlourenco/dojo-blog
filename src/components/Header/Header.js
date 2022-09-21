import React from 'react'

function Header({title,...props}) {
  return (
    <>
    <h2 data-testid="header-1" >{title}</h2>
    {/* <h3 title="Header">Cats</h3> */}
    </>
  )
}

export default Header