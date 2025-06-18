import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
   const error =  useRouteError();
   console.log(error);
   
  return (
    <div>Error: {error.statusText}</div>
  )
}

export default Error