//2660

var isWinner = function(player1, player2) {
    let playerCont = 0
    let player2Cont = 0

    for(let i=0; i < player1.length; i++){
        playerCont += player1[i]
        player2Cont += player2[i]

        if(player1[i-2] === 10 || player1[i-1] === 10){
            playerCont += player1[i]
        }

        if(player2[i-2] === 10 || player2[i-1] === 10){
            player2Cont += player2[i]
        }
    }

    return playerCont > player2Cont ? 1 : playerCont < player2Cont ? 2 : 0
};