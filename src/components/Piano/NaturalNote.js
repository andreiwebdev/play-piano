import React from 'react'
import SharpNote from './SharpNote'

const NaturalNote = props => {
  return (
    <div className='w-44 h-full bg-white border-black border-r-8 last:border-0 relative cursor-pointer'>
      {props.sharpNote && <SharpNote />}
    </div>
  )
}

export default NaturalNote
