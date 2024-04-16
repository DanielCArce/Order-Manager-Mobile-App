export async function getAllOrders(token) {
    const abortController = new AbortController()
    try {
        const request = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/orders/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            },
            signal: abortController.signal
        })
        const response = await request.json()
        const { orders } = response
        return orders
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function getOrderByID(token, orderID) {
    const abortController = new AbortController()
    try {
        const request = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/orders/${orderID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            },
            signal: abortController.signal
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function createOrder(token, orderInfo) {
    const abortController = new AbortController()
    const parsedBody = JSON.stringify(orderInfo)
    try {
        const request = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/orders/new-order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            },
            body: parsedBody,
            signal:abortController.signal
        })
        const response = await request.json()
        const { newOrder } = response       
        return newOrder
    } catch (error) {
        throw new Error(error.message)
    }
}