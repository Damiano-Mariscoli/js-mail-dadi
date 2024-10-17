const listaEmail= ['emailacaso@gmail.com']
UserEmail = prompt('inserisci la tua mail')
for (let i = 0; i < listaEmail.length ; i++){
    if (UserEmail == listaEmail){
        console.log('la tua mail è già registrata')
    }else {
        console.log('la tua email non è registrata')
    }
}



