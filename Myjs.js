


let userScore = 0;
let compScore = 0;
let countround= 0;
const srcImage = ["rock.png", "paper.png", "scissors.png"];

const userScoreDisplay = document.querySelector('#user-score');
const compScoreDisplay = document.querySelector('#computer-score');
const score = document.querySelector('#round');
const buttons=document.querySelectorAll('.userbutton');
const compContainer = document.querySelector('#displayCompChoice') ;
const playagain = document.querySelector('#playagainbutton');
const resultDisplay = document.querySelector('#messagedisplay');

function resetGame()
{
    countround = 0;
    userScore = 0;
    compScore = 0;
    round.textContent = countround;
    userScoreDisplay.textContent=userScore;
    compScoreDisplay.textContent=compScore;
    resultDisplay.textContent = 'ROCK PAPER SCISSORS';
    compContainer.replaceChildren();
     resultDisplay.style.color="black";

    buttons.forEach(btn => btn.classList.remove('selected-button'));

}

function getComputerChoice () 
{
    const rand = Math.floor (Math.random() * 3);
    return rand;
    /*0 is ROCK, 1 is PAPER, 2 is SCISSORS*/ 
}

function displayComputerChoice (compChoice)
{
       
    const compImage=document.createElement('img');
    compImage.src=srcImage[compChoice];
    compContainer.replaceChildren(compImage);
}


playagain.addEventListener('click',resetGame);

buttons.forEach ((button) => {

button.addEventListener('click', (e) => {

    buttons.forEach(btn => btn.classList.remove('selected-button'));
    let compChoice = getComputerChoice(); 
    let userChoice = Number(e.currentTarget.dataset.value);
    e.currentTarget.classList.add('selected-button');
    let difference=Math.abs(compChoice-userChoice);
    
    
    countround++;

    if (countround>5) 
        {
        resultDisplay.textContent ='The Game is Over. Click Play Again to restart.';
        return;
        }

    if (countround<=5)
    {
        if (difference==1) 
        {
        if (userChoice>compChoice) 
            {
            userScore++;
            } else 
            {
            compScore++;
            }

        }
        else if (difference==2)
        {
         if (userChoice>compChoice) 
            {
            compScore++;
            } else 
                {
            userScore++;
            }
        };
        }
 
    round.textContent = countround;
    userScoreDisplay.textContent=userScore;
     compScoreDisplay.textContent=compScore;    
    displayComputerChoice (compChoice);

    if (countround==5)
        {
        
    if (userScore>compScore)
        {
    resultDisplay.textContent=('Congratulations! You won!!');
    resultDisplay.style.color="darkgreen";
        } 
        else if (compScore>userScore) 
        {
    resultDisplay.textContent=('Upsiii, you lost...Try again!.');
    resultDisplay.style.color="darkred";
        } else if (compScore==userScore)
        {
           resultDisplay.textContent=('a tie! Try again :)');
        }
     }
       
    });
    
    });




 
