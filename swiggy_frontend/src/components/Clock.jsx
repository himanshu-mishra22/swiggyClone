import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());


    useEffect(()=>{
        const id = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)

        return ()=>clearInterval(id);
    })
   

  return (
    <div>Time: {time}</div>
  )
}

export default Clock