import React from 'react'

export default function Header() {
  return (
    <div className="grid grid-cols-2 content-between ">
        <div>
            <span>Finance tracker</span>
        </div>
        <div className='flex justify-end'>
            <span>John Doe</span>
            <div></div>
        </div>
    </div>
  )
}
