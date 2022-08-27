export function  authorization(){
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    
    if(!usuario) return;

    const config = {
        headers: {
            Authorization: usuario.token
            }
    
        }

    return config;
}