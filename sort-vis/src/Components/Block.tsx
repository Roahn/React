
import React from 'react'
type BlockProps={
    size :number
}
export default function Block(props:BlockProps) {
  return (
   
    <> 
     <div>Block {props.size}</div>
          <div
              className="array-bar"
              
              style={{
                  backgroundColor: 'red',
                  height: `${props.size}px`,
                  width:'10px'
              }}></div>
    </>
  )
}
