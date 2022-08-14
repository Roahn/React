
import { randomInt } from 'crypto';
import React from 'react'
import Block from './Block';


function randint(low: number, max?: number) {
    return Math.floor(Math.random() * 10) % (max ?? low) + (max ? low : 0);
}
function Display() {

    var Array: number[]=[100,200,300,400];
    
    return (
        <>
        {
           Array.map((i)=>{
               <Block size={i}></Block>
            })
           
        }
            
            
        </>)
}

export default Display;