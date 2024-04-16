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