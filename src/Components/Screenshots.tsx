import React from 'react'
import { fetchData } from '../Hooks/renderAsFetch'
 
function Screenshots(props:{screenshots:any}) {
   
    const data = props.screenshots.read()
  return (
    <>
        {data?.results.map((r:any) => (
            <img src={r.image} style={{width: '30%'}} alt="" key={r.id}/>
        ))}
        Screenshots</>
  )
}

export default Screenshots