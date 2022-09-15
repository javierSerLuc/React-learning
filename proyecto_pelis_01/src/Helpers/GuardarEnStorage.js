export const GuardarEnStorage = (key,element) =>{
    //conseguir los elementos del localStorage
    console.log(key);
    console.log(element);
    let elementos = JSON.parse(localStorage.getItem(key));
    
    //Comprobar si es un array
    if(Array.isArray(elementos)){
        elementos.push(element);
    }else{
        elementos = [element];
    }
    //Guardar en el localStorage
    localStorage.setItem(key,JSON.stringify(elementos));
    //Devolver objeto guardado
    return element;
};