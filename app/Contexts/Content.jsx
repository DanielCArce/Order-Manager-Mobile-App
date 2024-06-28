import { createContext, useReducer } from 'react'
import ContentReducer from '../Reducers/Content'
export const ContentContext = createContext(null)
const initialState = {
    orders: [],
    order:{},
    clients: [],
    client: {},
    shippings: [],
    filterBy: 'ON_PROGRESS'
}
export default function ContentProvider({ children }) {
    const [state,dispatch ] = useReducer(ContentReducer,initialState)
    return (
        <ContentContext.Provider value={{ state, dispatch }}>
            {children}
        </ContentContext.Provider>
    )
}