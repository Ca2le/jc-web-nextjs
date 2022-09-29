import React, { useContext } from 'react'
import { LangageContext } from '../../../components.libary'
import { Div } from './cards.styled'
import Card from './card/card.component'

function CardsComponent() {
    const { state_langange } = useContext(LangageContext)

    return <Div>
        {state_langange.showroom_projects.map( (element, index) => {
            
            return <Card key={(element.id+index)} element={element}/>
        })}
    </Div>
}

export default CardsComponent