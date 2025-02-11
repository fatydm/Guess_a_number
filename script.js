
const askNumber = () => {
    let givenNumber = prompt('Donnez moi un nombre')

    return parseInt(givenNumber)
}

const didWin = (givenNumber) => {
    if (givenNumber < 22) {
        alert('Plus grand')
        return(false)
    } else if (givenNumber > 22) {
        alert('Plus petit')
        return(false)
    } else {
        alert('Bravo! vous avez deviné le nombre')
        return(true)
    }
}

// const gamePlay = () => {
//     let givenNumber = askNumber();
//     if (didWin(givenNumber) == false) {
//         gamePlay();

//     } else {
//         return;

//     }
// }