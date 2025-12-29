

function getComputerChoice () 
{
    const rand = Math.floor (Math.random() * 3);
    
    if (rand == 0) {
    return ("ROCK")
    }
    else if ( rand == 1 ) {
    return ("PAPER")
    }
    else if ( rand == 2) {
    return ("SCISSORS")
    }

    }
/*console.log (getComputerChoice());*/


function getHumanChoice (choice) {
    choice = prompt("Rock, paper or scissors?");
    return (choice.toUpperCase());
}

/*console.log (getHumanChoice());*/

let humanScore = 0;
let computerScore = 0;

function playRound (CC, HC) 
{
  if (CC =="ROCK") 
    {
    if (HC =="SCISSORS") 
        {
        return (computerScore++) 
        } 
    else if (HC =="PAPER") 
        {
        return (humanScore++) 
        } 
    }

  if (CC =="SCISSORS") 
    {
    if ( HC =="PAPER") 
        {
        return (computerScore++) 
        } 
    else if ( HC =="ROCK") 
        {
        humanScore++ 
        } 
    }

    if ( CC =="PAPER") 
    {
    if ( HC =="ROCK") 
        {
        computerScore++ 
        } 
    else if ( HC =="SCISSORS") 
        {
        humanScore++ 
        } 
    }

}


for (let i=0; i<5; i++) {
    let CC = getComputerChoice();
    let HC = getHumanChoice();

    playRound(CC, HC);


    console.log (`You:${HC} vs me:${CC}. Score is ${humanScore}(you) vs ${computerScore}(me).`);

}

if (computerScore >= humanScore ) {
    console.log (`FINAL SCORE: ${humanScore} vs ${computerScore}. I WON!`)
}
else if (computerScore <= humanScore) {
    console.log (`FINAL SCORE: ${humanScore} vs ${computerScore}. YOU WON!`)
}
else { console.log (`FINAL SCORE: ${humanScore} vs ${computerScore}. empatamos`) 
 }
