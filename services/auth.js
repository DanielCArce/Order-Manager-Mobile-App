export async function getToken(user) {
  try {
    const payload = JSON.stringify(user)
    console.log({payload, user, endpoint:process.env.EXPO_PUBLIC_GATEWAY_API})
    const request = await fetch('http://192.168.100.7:3000/auth/authorization', {
      method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    },
      body: payload
    })
    const {token} = await request.json()
    return token
  } catch (e) {
    throw new Error(e.message)
  }
}