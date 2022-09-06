export function handdleErrors(input){

    let errors = {};

    if(!input.name){
        errors.name = "El campo nombre no puede estar vacío";
    }else if(input.name.length < 8){
        errors.name ="El nombre no puede tener menos de 8 caracteres"
    }

    
    if(!input.dni){
        errors.dni = "El campo Identificación no puede estar vacío"
    }else if(!/[0-9]/.test(input.dni)){
        errors.dni = "El campo identificación contener solo números"
    }
    
    
    if(!input.address){
        errors.address = "El campo dirección no puede estar vacío"
    }
     if(input.address.length < 20){
        errors.address = "El campo dirección debe tener como mínimo 20 caracteres"
    }

    console.log(input.birthday.length)
    if(input.birthday.length === 0){
        errors.birthday = "El campo fecha de nacimiento no puede estar vacío"
    }
     
  
    return errors;

}