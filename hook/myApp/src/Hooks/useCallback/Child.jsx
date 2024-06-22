import React from 'react'
import { memo } from 'react'

const Child = ({ countOne }) => {
  console.log('hello world')
  return (
    <>
      <h3>component rendered.......</h3>
    </>
  )
}

export default memo(Child)
