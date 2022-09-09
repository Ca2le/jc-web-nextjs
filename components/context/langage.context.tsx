import React, { useReducer } from 'react'
import * as langage from '../../global/langage'
import { LangageType } from '../../@types/langage'

export const LangageContext = React.createContext<LangageType | null>(null)

function LangageComponent(props):React.FC <React.ReactNode> = ({children}) => {
    
}
    const initialState = 'sv'
    const [state, dispatch] = useReducer(func, initialState)
    return(
        <LangageContext.Provider value={{ dispatch: dispatch, textAPI: translateTo(state) }}>
            {props.children}
        </LangageContext.Provider>
    )
}