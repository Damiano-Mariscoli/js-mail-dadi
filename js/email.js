const listaEmail= ['emailacaso@gmail.com' ,'mamma@gmail.com' , 'zio@gmail.com' ]
const UserEmail = prompt('inserisci la tua mail')
let found = false
for (let i = 0; i < listaEmail.length ; i++){
    if (UserEmail === listaEmail[i]){
        found = true
        break
    }
}
if (found === true){
    console.log('Registrato')
}else {
    console.log('Non registrato')
}


