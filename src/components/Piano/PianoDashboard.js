import React from 'react'

const PianoDashboard = props => {
  return (
    <div 
      style={{ width: '1232px', height: '400px' }} 
      className='bg-black min-w-max relative pb-4 flex'
    >
      {props.children}
    </div>
  )
}

export default PianoDashboard
