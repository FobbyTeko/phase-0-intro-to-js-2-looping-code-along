// Code your solutions in this file
function writeCards(name, other) {
    let cards = []
    for(let i in name) {
        cards.push(`Thank you, ${name[i]}, for the wonderful ${other} gift!`)
    }
    return cards 
}

const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function countDown (value) {
    for(let i = value; i > -1; i--) {
        console.log(i)
    }
}