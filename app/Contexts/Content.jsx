import { createContext, useReducer } from 'react'
import ContentReducer from '../Reducers/Content'
export const ContentContext = createContext(null)
export default function ContentProvider({ children }) {
    const [state,dispatch ] = useReducer(ContentReducer,{orders:[], order:{}, clients:[], shippings:[], filterBy:'ON_PROCESS'})
    return (
        <ContentContext.Provider value={{ state, dispatch }}>
            {children}
        </ContentContext.Provider>
    )
}