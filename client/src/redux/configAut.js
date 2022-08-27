export function  authorization(){
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    
    const config = {
        headers: {
            Authorization: usuario.token
            }
    
        }

    return config;
}