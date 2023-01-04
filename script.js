function getComputerChoice()
{
    const computerChoices = [];
    computerChoices[0] = "scissors";
    computerChoices[1] = "rock";
    computerChoices[2] = "paper";
    const rtrn = Math.floor(Math.random() * 3);
    const ComputerSelection = computerChoices[rtrn];
    return ComputerSelection;
}
function getPlayerSelection()
{
    let valid;
    let playerSelection = prompt("Enter choice: ");

    do {
    rtrn = playerSelection.toLowerCase();
    if(rtrn === "rock" || rtrn === "paper" || rtrn === "scissors")
    {
        valid = true;
    }
    else
    {
        playerSelection = prompt("Invalid Choice. Re-Enter:")
        valid = false;
    }
    } while (valid === false) 
    return rtrn;
}

function playRound(player, computer)
{

    let winner;
    if(player === "rock" && computer === "rock")
    {
        winner = "tie";
    }
    else if(player === "rock" && computer === "paper")
    {
        winner = "loss";
    }
    else if(player === "rock" && computer === "scissors")
    {
        winner = "won";
    }
    else if(player === "paper" && computer === "rock")
    {
        winner = "won";
    }
    else if(player === "paper" && computer === "paper")
    {
        winner = "tie";
    }
    else if(player === "paper" && computer === "scissors")
    {
        winner = "loss";
    }
    else if(player === "scissors" && computer === "rock")
    {
        winner = "loss";
    }
    else if(player === "scissors" && computer === "paper")
    {
        winner = "won";
    }
    else if(player === "scissors" && computer === "scissors")
    {
        winner = "tie";
    }
    return winner;
}

function game()
{
    let gamesWon = 0;
    let computerWon = 0;
    let ties = 0;
    for(let x = 0; x < 5; x++)
    {
        const computerChoice = getComputerChoice(); 
        const playerChoice = getPlayerSelection();
        let winner = playRound(playerChoice, computerChoice);
        if(winner === "loss")
        {
            computerWon++;
        }
        else if(winner === "won")
        {
            gamesWon++;
        }
        else if(winner === "tie")
        {
            ties++;
        }
    }
    console.log("Player wins: " + gamesWon);
    console.log("Computer wins: " + computerWon);
    console.log("Ties: " + ties);

    if(computerWon > gamesWon)
    {
        console.log("Computer Wins");
    }
    else if(gamesWon > computerWon)
    {
        console.log("You Win");
    }
    else
    {
        console.log("Tie");
    }
}

game();
