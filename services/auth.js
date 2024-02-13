export function get_credenctials(user, pass) {
    const options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({"username":user,"password":pass})
    }
    return fetch('http://192.168.100.7:3000/api/v1/auth/token', options)
        .then((rawData) => {
            return rawData.json()
        })
        .then(({ token }) => { return token })
        .catch((e)=>{ console.log(e)})
}
export function create_new_user(userInfo) {
  
}