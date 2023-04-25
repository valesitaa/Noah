function addLikes(btn){
    //Recoger id del boton que se clickeo para usarlo y buscar el contador a sumar 1
    const uid = btn.id
  
    //Se busca la etiqueta y su valor en texto, luego se pasa a un numero entero
    let likes = parseInt(document.querySelector(`.${uid}`).textContent)
  
    //Se guarda el valor de likes + 1 dentro de result
    let result = likes + 1
  
    //Se actualiza el valor de nuestro contador
    document.querySelector(`.${uid}`).textContent = result
  }
  