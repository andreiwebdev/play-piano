import React from 'react'

const NaturalNote = props => {
  return (
    <div className='relative border-black border-r-8 last:border-0'>
      <div onClick={() => props.playSharpNote(props.naturalNote)} className='w-44 h-full bg-white relative cursor-pointer'>
      </div>
      {
        props.sharpNote && 
        <div onClick={() => props.playSharpNote(props.sharpNote)}
        className='w-20 h-72 absolute -right-1/4 top-0 bg-black border-r-8 last:border-0 z-10 cursor-pointer'></div>
      }
    </div>
  )
}

export default NaturalNote
