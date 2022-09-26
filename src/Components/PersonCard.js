import React from 'react'

export const PersonCard = (props) => {
  const { lastName, firstName, age, hairColor } = props
  return (
    <>
      <h1>{ lastName }, { firstName }</h1>
      <p>Age: { age }</p>
      <p>Hair Color: { hairColor }</p>
    </>
  )
}
