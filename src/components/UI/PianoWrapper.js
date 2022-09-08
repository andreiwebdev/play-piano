import React from 'react'

const PianoWrapper = props => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      {props.children}
    </div>
  )
}

export default PianoWrapper
