import React from 'react'
import { useNavigate } from 'react-router'

export const HomeComponent = () => {
  const navigateTo = useNavigate()
  return (
    <>
      <h1>HomeComponent</h1>

      <button onClick={() => navigateTo("/about")}> Go to About </button>
    </>
  )
}
