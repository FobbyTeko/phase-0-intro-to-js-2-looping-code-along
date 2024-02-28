// Code your solutions in this file
function writeCards(name, other) {
    let cards = []
    for(let i in name) {
        cards.push(`Thank you, ${name[i]}, for the wonderful ${other} gift!`)
    }
    return cards 
}

function countDown (value) {
    for(let i = value; i > -1; i--) {
        console.log(i)
    }
}