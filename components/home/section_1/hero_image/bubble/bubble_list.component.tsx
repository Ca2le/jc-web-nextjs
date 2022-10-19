import React, { useEffect, useRef } from 'react'
import BubbleComponent from './bubble.component'
import { Bubble } from './bubble.styled'


function createBubbleArray() {
    const bubbleArray = []
    for (let i = 0; i <= 5; i++) {

        const bubbleComponent = <BubbleComponent key={i} delay={Math.floor((Math.random() + i) * 1.5)}
            // size={`${Math.floor(Math.random() * 50) + 200}px`}
            // endOfX={`${Math.floor(Math.random() * 300)}%`}
            // endOfY={`${Math.floor(Math.random() * -200)}%`} />
            size={Math.ceil(Math.random() * 50) + 200}
            endOfX={Math.ceil(Math.random() * 3) * 50}
            endOfY={Math.ceil(Math.random() * 3 ) * (-100)} />

        bubbleArray.push(bubbleComponent)
    }
    return bubbleArray
}

function BubbleList() {

    const bubbleRef = useRef()
    let bubbleArray
    
    useEffect(() => {
           // @ts-ignore
        bubbleRef.current = createBubbleArray()
      
    }, [])

    if (!bubbleRef.current){
        return <></>
         // @ts-ignore
    } else return bubbleRef.current.map( (element) => {
        return element
    })
    
 
   
    


}

export default BubbleList