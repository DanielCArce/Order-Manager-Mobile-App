export async function getAllClients(token) {
    const abortController = new AbortController()
    try {
        const request = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/companies/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            signal: abortController.signal
        })
        const response = await request.json()
        const { allCompanies } = response
        return allCompanies
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function createClient(token, payload) {
    const abortController = new AbortController()
    try {
        const content = JSON.stringify(payload)
        const request = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/companies/new-company`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: content,
            signal:abortController.signal
        })
        const response = await request.json()
        const { newCompany } = response
        return newCompany
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function updateClientInfo(token, companyID, payload) {
 const abortController = new AbortController()
    try {
        const content = JSON.stringify(payload)
        const request = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/companies/${companyID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: content,
            signal:abortController.signal
        })
        if (request.status == 200) {
            const response = await request.json()
            const { companyUpdated } = response
            return companyUpdated
        }
    } catch (error) {
        throw new Error(error.message)
    }   
}
export async function deleteClientActive(token, companyID) {
    const abortController = new AbortController()
    try {
        const request = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/companies/${companyID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            signal:abortController.signal
        })
        const response = await request.json()
        const { companyUpdated } = response
        return companyUpdated
    } catch (error) {
        throw new Error(error.message)
    }   
}