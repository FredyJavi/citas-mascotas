import React from 'react'

export const Error = ({children}) => {
  return (
    <div className='bg-red-600 rounded'>
        <p className='text-white text-center uppercase font-bold'>{children}</p>
    </div>
  )
}


