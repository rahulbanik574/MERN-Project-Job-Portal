import React from 'react'
import Button from './Button'

const Salary = ({handleChange,handleClick}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Salary</h4>
      <div>
        <Button handleChange={handleClick} value="" title="Hourly"/ >
        <Button handleChange={handleClick} value="Monthly" title="Monthly"/ >
        <Button handleChange={handleClick} value="Yearly" title="Yearly"/ >
      </div>
    </div>
  )
}

export default Salary
