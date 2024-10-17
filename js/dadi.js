let giocatore = Math.floor(Math.random() * 6) + 1
let computer = Math.floor(Math.random() * 6) + 1
console.log(giocatore, computer)

if (giocatore > computer){
    console.log('giocatore ha vinto')
}else if (giocatore == computer){
    console.log('hai pareggiato')
}else {
    console.log('giocatore ha perso')
}




