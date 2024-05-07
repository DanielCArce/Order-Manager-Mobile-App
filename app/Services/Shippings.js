export async function getAllShippings(token) {
    try {
        const request = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/shippings/`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            }
        })
        if(request.status == '200'){
            const {shippings} = await request.json()
            return shippings
        }

    } catch (error) {
        throw new Error(error.message)
    }
}
export async function createNewShipping(token, shippingInfo) {
    try {
        const request = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/shippings/new-shipping`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}` 
            },
            body: JSON.stringify(shippingInfo)
        })
        if (request.status == '200') {
            const { shipping } = await request.json()
            return shipping
        }
    } catch (error) {
        throw new Error(error.message)
    }
}