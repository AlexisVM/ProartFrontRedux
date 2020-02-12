export function authHeader() {
    // return authorization header with jwt token
    let token = localStorage.getItem('token');
   // console.log(user);
    if (token) {
        return { 'Authorization': 'Token ' + token };
    } else {
        return {};
    }
}