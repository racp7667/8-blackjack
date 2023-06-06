let player = {
    name: "Player",
    chips: 100
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("msg-el")
let sumEl = document.getElementById("sum-el") 
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomNum() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if(randomNum > 10){
        return 10
    } else if(randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomNum()
    let secondCard = getRandomNum()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i +=1){
        cardsEl.textContent += " " + cards[i]
    }

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        messageEl.textContent = "Do you want to draw a new card?"
    } else if(sum === 21) {
        messageEl.textContent = "You've got a Blackjack!" 
        hasBlackJack = true
    } else {
        messageEl.textContent = "You're out of the game!"
        isAlive = false
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomNum()
        sum += card
        cards.push(card)
        renderGame()        
    }
}