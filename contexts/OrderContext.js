import OrderReducer from '../reducers/OrdersReducer'
import { createContext, useReducer} from 'react'

export const OrderContext = createContext(null)
const initialState = {
    orders: [
        {
            orderID: 1,
            client: 'Bernando Sanchez Paniagua',
            pricePerInch: 330,
            date: new Date(),
            status: 'PENDING',
            isFE: true,
            items: [
                { id: 1, quantity: 5, description: 'Paquete Negro Redondo', size: 45, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'},
                {id:3, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'},
                {id:4, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'},
                { id: 5, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' },
                { id: 6, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' },
                { id: 7, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' },
                { id: 8, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' },
                { id: 9, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' },
                { id: 10, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' },
                { id: 11, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' },
                { id: 12, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' }
                // { id: 13, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' },
                // { id: 14, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' },
                // { id: 15, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' },
                // { id: 16, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' },
                // { id: 17, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' },
                // { id: 18, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' },
                // { id: 19, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' },
                // { id: 20, quantity: 3, description: 'Paquete Blanco Plano', size: 36, und: 'Paquete' }
            ]
        },
        {
            orderID: 2,
            client: 'Reparadora Berraca',
            pricePerInch: 330,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            orderID: 3,
            client: 'Peleteria Guillen',
            pricePerInch: 330,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            orderID: 4,
            client: 'Calzgoes',
            pricePerInch: 350,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            orderID: 5,
            client: 'Evelio Garcia',
            pricePerInch: 350,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            orderID: 6,
            client: 'Codical Dos Mil S.A.',
            pricePerInch: 380,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            orderID: 7,
            client: 'Bernardo Sanchez Paniagua',
            pricePerInch: 330,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            orderID: 8,
            client: 'Reparadora Berraca',
            pricePerInch: 330,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            orderID: 9,
            client: 'Peleteria Paniagua',
            pricePerInch: 330,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            orderID: 10,
            client: 'Reparadora Berraca',
            pricePerInch: 330,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            orderID:11,
            client: 'Reparadora Berraca',
            pricePerInch: 330,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            orderID: 12,
            client: 'Reparadora Berraca',
            pricePerInch: 330,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            orderID: 13,
            client: 'Reparadora Berraca',
            pricePerInch: 330,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            orderID: 14,
            client: 'Reparadora Berraca',
            pricePerInch: 330,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            orderID: 15,
            client: 'Reparadora Berraca',
            pricePerInch: 330,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            orderID: 16,
            client: 'Reparadora Berraca',
            pricePerInch: 330,
            date: new Date(),
            status:'PENDING',
            items: [
                { id: 1, quantity: 2, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 3, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        }
    ],
    order: null,
    shipping:null,
    shippings: [
        {
            id: 1,
            orderID: 1,
            items: [
                { id: 1, quantity: 1, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 1, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            id: 2,
            orderID: 1,
            items: [
                { id: 1, quantity: 1, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 1, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            id: 3,
            orderID: 5,
            items: [
                { id: 1, quantity: 1, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 1, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            id: 4,
            orderID: 3,
            items: [
                { id: 1, quantity: 1, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 1, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        },
        {
            id: 5,
            orderID: 3,
            items: [
                { id: 1, quantity: 1, description: 'Paquete Negro Redondo', size: 65, und: 'Paquete' },
                {id:2, quantity: 1, description: 'Paquete Blanco Plano', size:36, und: 'Paquete'}
            ]
        }

    ]
}
function OrderProvider({ children }) {
    const [state, dispatch] = useReducer(OrderReducer,initialState)
    return (
        <OrderContext.Provider value={{state, dispatch}}>
            {children}
        </OrderContext.Provider>
    )
}
export default OrderProvider