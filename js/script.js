function sendMessage(e){
    /**Hace una pausa en el comportamiento del elemento */
    e.preventDefault();
     /**Obtengo una referencia del elemento formulario */
    const form = document.querySelector("#form-contact");
    alert("Mensaje Enviado");
    form.reset();
    const d = new Date()
    let message = '';
        if(d.getDay() === 6 || d.getDay() === 0){
            message = 'Mensaje enviado en fin de semana';
        }
        else{
        message = 'Mensaje enviado entre semana';
        }

    alert(message)
}

