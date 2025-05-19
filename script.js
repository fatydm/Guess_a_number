// Étape 1 : je créé la fonction qui me demande un nombre et qui stocke la réponse dans une variable
`const askNumber = () => {
    let givenNumber = prompt('Donnez moi un nombre')
    return parseInt(givenNumber)
}`

    // Étape 2 : je créé une fonction avec en paramètre (givenNumber) si le nombre choisi est <, > ou = à 22 alors une alerte s'affiche 

    `function didIWin(givenNumber) {
    if (givenNumber < 22) {
        alert('Plus grand')
        return false
    } else if (givenNumber > 22) {
        alert('Plus petit')
        return false
    } else if (givenNumber == 22) {
        alert('Bravo! vous avez deviné le nombre')
        return true
    }
}`

    // didIWin(askNumber())

    // Étape 3 : je créé une fonction qui dit que si didWin (le nombre) est true alors ok et s'il est false alors ma fonction se relance
    `const gamePlay = () => {
    let givenNumber = askNumber()
    if (didIWin(givenNumber) == false) {
        gamePlay()
    }
}
gamePlay()`


// Étape 4 : je créé une fonction qui demande au joueur 1 de fournir un nombre à deviner compris entre 0 et 50 tant qu’il ne respecte pas ce range.
const askNumber = () => {
    let givenNumber = prompt('Donnez moi un nombre')
    return parseInt(givenNumber)
}


const askNumberPlayer1 = () => {
    let numberToGuess = -1
    while (numberToGuess < 0 || numberToGuess > 50) {
        alert('Joueur 1, entrez un nombre entre 0 et 50')
        numberToGuess = askNumber()
    }
    return parseInt(numberToGuess);
}


const didIWin = (givenNumber, numberToGuess) => {
    if (givenNumber < numberToGuess) {
        alert('Plus grand')
        return false
    } else if (givenNumber > numberToGuess) {
        alert('Plus petit')
        return false
    } else {
        alert('Bravo! Vous avez deviné le bon nombre')
        return true
    }
}


const gamePlay = () => {
    let gameOver = false

    while (gameOver === false) {
        let givenNumber = askNumber()
        if (askNumberPlayer1 == true) {
            gameOver = true
        } else {
            gamePlay()
        }
    }

}
gamePlay()
//     appeler askNumberPlayer1() pour récupérer numberToGuess
//     initialiser gameOver à false
//     tant que gameOver est false:
//         appeler askNumber() pour récupérer givenNumber
//         si didIWin(givenNumber, numberToGuess) est true:
//             gameOver devient true
//         sinon:
//             continuer la boucle (le joueur essaie encore)

// appel gamePlay()





















