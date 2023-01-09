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

let userWins = 0;
let computerWins = 0;
document.getElementById("rock").onclick = function() {choice("rock")};
document.getElementById("paper").onclick = function() {choice("paper")};
document.getElementById("scissors").onclick = function() {choice("scissors")};

function choice(playerChoice)
{
        if(userWins === 0 && computerWins === 0)
        {
            document.getElementById("result").innerHTML = "";
            console.log("reset");
        }
        let winner = playRound(playerChoice, getComputerChoice());
    
        if(winner === "won")
        {
            userWins++;
            

            if(userWins === 5)
            {                
                document.getElementById("result").innerHTML = "You Win";
                computerWins = 0;
                userWins = 0;
            }
        }
        else if(winner === "loss")
        {
            computerWins++;
            console.log("computer wins " + computerWins);
            if(computerWins === 5)
            {
                document.getElementById("result").innerHTML = "Computer Wins";
                computerWins = 0;
                userWins = 0;
            }
        }
        document.getElementById("computer_score").innerHTML = "Computer score: " + computerWins;
        document.getElementById("user_score").innerHTML = "User score: " + userWins;
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
    console.log(winner);
    return winner;
}

