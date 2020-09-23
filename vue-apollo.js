export async function onLogin(something, token){
  if(typeof localStorage !== 'undefined' && token){
    localStorage.setItem(AUTH_TOKEN, token)
  }
}