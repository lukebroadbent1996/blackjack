    let suits = ["♥", "♦", "♠", "♣"];
    let value = ["A","2","3","4","5","6","7","8","9","10","J", "Q", "K"];
    let deck = [];

    let playerHand = [];
    let dealerHand = [];

    let playerScore = 0;
    let dealerScore = 0;

let drawDeck = () => {
    for (i = 0; i < value.length; i++)
    {
        for (x = 0; x < suits.length; x++)
        {
            let cardWeight = parseInt(value[i]);
            if (value[i] == "J" || value[i] == "Q" || value[i] == "K")
            cardWeight = 10;
            else if (value[i] == "A")
            cardWeight = 11;

            let card = { Value: value[i], Suit: suits[x], Weight: cardWeight };
                deck.push(card);
            // deck.push(value[x] + suits[i]);
        }
    }
        return deck;
}

let shuffle = (deck) => {
    for (i = 0; i < 52; i++){
        let card = deck[i];
        let randomNum = Math.floor(Math.random() * 52);
        deck[i] = deck[randomNum];
        deck[randomNum] = card;

    }
}

let drawCard = (deck) =>{
    let randomIndex = Math.floor(deck.length * Math.random());
    return deck[randomIndex]
}



let handValue = (hand)=>{
    sum = 0;
    for (i = 0; i < hand.length; i++){
        sum += hand[i].Weight;
    }
    return sum;
}

let total = (hand)=>{
    for (i = 0; i < hand.length; i++){
        playerScore+=handValue(playerHand)
        document.getElementById("playerValue").innerHTML = playerScore
    }
    
}

let dealerTotal = (hand)=>{
    for (i = 0; i < hand.length; i++){
        dealerScore+=handValue(dealerHand)
        document.getElementById("dealerValue").innerHTML = dealerScore
    }
}

let clickCount=0;
let hit=()=>{
    
    document.getElementById("hitBtn")
    clickCount++
    
        if (clickCount==1){ 
            playerHand.push(drawCard(deck));
            removeCard();
            total(playerHand)
            win()
            let playerCards = playerHand.map( (x) => { return x.Value + x.Suit });
            document.getElementById("playerCard-2").innerHTML =  playerCards;
        }
        else if (clickCount==2){
            playerHand.push(drawCard(deck));
            removeCard();
            total(playerHand)
            win()
            let playerCards = playerHand.map( (x) => { return x.Value + x.Suit });
            document.getElementById("playerCard-3").innerHTML =  playerCards 
        }
        else if (clickCount==3){
            playerHand.push(drawCard(deck));
            removeCard();
            total(playerHand)
            win()
            let playerCards = playerHand.map( (x) => { return x.Value + x.Suit });
            document.getElementById("playerCard-4").innerHTML =  playerCards 
        }
        else if (clickCount==4){
            playerHand.push(drawCard(deck));
            removeCard();
            total(playerHand)
            win()
            let playerCards = playerHand.map( (x) => { return x.Value + x.Suit });
            document.getElementById("playerCard-5").innerHTML =  playerCards 
            
        }
        console.log(clickCount)
        
    
    
}

let win =()=>{
    if (playerScore > 21){
        document.getElementById("condition").innerHTML = 'Bust'
        document.getElementById("hitBtn").disabled = true;
        document.getElementById("stayBtn").disabled = true;
       
    }
    else if (playerScore == 21){
        document.getElementById("condition").innerHTML = 'BLACKJACK - Player wins'
        document.getElementById("hitBtn").disabled = true;
        document.getElementById("stayBtn").disabled = true;
       
    }
    
}

let dealerDraw = ()=>{
    dealerHand = [drawCard(deck)];
    let dealerCards = dealerHand.map( (x) => { return x.Value + x.Suit });
    document.getElementById("dealer").innerHTML = 'Dealers Cards: '
    document.getElementById("dealerCard-1").innerHTML = dealerCards
}

let playerDraw = ()=>{
    playerHand = [drawCard(deck)];
    let playerCards = playerHand.map( (x) => { return x.Value + x.Suit });
    document.getElementById("playerCard-1").innerHTML = playerCards
}

let removeCard = ()=>{
    playerHand.splice(0,1);
}

let removeDealer = ()=>{
    dealerHand.splice(0,1);
}


let startGame =()=>{
    playerDraw();
    dealerDraw();
    total(playerHand)
    dealerTotal(dealerHand)
    

let playerCards = playerHand.map( (x) => { return x.Value + x.Suit });
let dealerCards = dealerHand.map( (x) => { return x.Value + x.Suit });
// let cardTotal = playerHand.map( (x) => { return x.Weight });
// document.getElementById("playerValue").innerHTML = cardTotal
document.getElementById("player").innerHTML = 'Your Cards: '
document.getElementById("startBtn").disabled = true;

}

let stay =()=>{
    dealerHand.push(drawCard(deck));
    removeDealer();
    let dealerCards = dealerHand.map( (x) => { return x.Value + x.Suit });
    document.getElementById("dealerCard-2").innerHTML = dealerCards
    dealerTotal(dealerHand)
    dealerWin()
   

    
    if (playerScore > dealerScore && playerScore < 21){
        document.getElementById("condition").innerHTML = 'Player Wins'
        document.getElementById("stayBtn").disabled = true;
        document.getElementById("hitBtn").disabled = true;

    }
    else if (dealerScore == 21){
        document.getElementById("condition").innerHTML = 'BLACKJACK - Dealer wins'
        document.getElementById("hitBtn").disabled = true;
        document.getElementById("stayBtn").disabled = true;
       
    }
    else if (dealerScore > playerScore && dealerScore < 21){
        document.getElementById("condition").innerHTML = 'Dealer Wins'
        document.getElementById("stayBtn").disabled = true;
        document.getElementById("hitBtn").disabled = true;

    }
    else if (playerScore == dealerScore){
        document.getElementById("condition").innerHTML = 'Draw'
        document.getElementById("stayBtn").disabled = true;
        document.getElementById("hitBtn").disabled = true;

    }
    else if (dealerScore > 21){
        document.getElementById("condition").innerHTML = 'Dealer Bust. Player Wins'
        document.getElementById("stayBtn").disabled = true;
        document.getElementById("hitBtn").disabled = true;
    }
    
}

let newGame=()=>{
    location.reload();
}

let dealerWin=()=>{
    
    while (dealerScore < 17){
        if (dealerScore <= 10){
            dealerHand.push(drawCard(deck));
            removeDealer();
            let dealerCards = dealerHand.map( (x) => { return x.Value + x.Suit });
            document.getElementById("dealerCard-3").innerHTML = dealerCards
            dealerTotal(dealerHand)
        }
        else if (dealerScore == 11){
            dealerHand.push(drawCard(deck));
            removeDealer();
            let dealerCards = dealerHand.map( (x) => { return x.Value + x.Suit });
            document.getElementById("dealerCard-4").innerHTML = dealerCards
            dealerTotal(dealerHand)
        }
        else if (dealerScore == 12){
            dealerHand.push(drawCard(deck));
            removeDealer();
            let dealerCards = dealerHand.map( (x) => { return x.Value + x.Suit });
            document.getElementById("dealerCard-5").innerHTML = dealerCards
            dealerTotal(dealerHand)
        }
        else if (dealerScore == 13){
            dealerHand.push(drawCard(deck));
            removeDealer();
            let dealerCards = dealerHand.map( (x) => { return x.Value + x.Suit });
            document.getElementById("dealerCard-6").innerHTML = dealerCards
            dealerTotal(dealerHand)
        }
        else if (dealerScore == 14){
            dealerHand.push(drawCard(deck));
            removeDealer();
            let dealerCards = dealerHand.map( (x) => { return x.Value + x.Suit });
            document.getElementById("dealerCard-7").innerHTML = dealerCards
            dealerTotal(dealerHand)
        }
        else if (dealerScore == 15){
            dealerHand.push(drawCard(deck));
            removeDealer();
            let dealerCards = dealerHand.map( (x) => { return x.Value + x.Suit });
            document.getElementById("dealerCard-8").innerHTML = dealerCards
            dealerTotal(dealerHand)
        }
        else if (dealerScore == 16){
            dealerHand.push(drawCard(deck));
            removeDealer();
            let dealerCards = dealerHand.map( (x) => { return x.Value + x.Suit });
            document.getElementById("dealerCard-9").innerHTML = dealerCards
            dealerTotal(dealerHand)
        }
        

    }
}

let dealerWin2=()=>{
    if (dealerScore < 17){
        dealerHand.push(drawCard(deck));
        removeDealer();
        document.getElementById("dealerCard-4").innerHTML = dealerCards

    }
}

let newDeck = drawDeck();
shuffle(newDeck);
// console.log(newDeck)








