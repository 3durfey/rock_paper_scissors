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
let ties = 0;
let round = 1;
let winner = [];
document.getElementById("rock").onclick = function() {choice("rock")};
document.getElementById("paper").onclick = function() {choice("paper")};
document.getElementById("scissors").onclick = function() {choice("scissors")};
document.getElementById("scissors").onclick = function() {choice("scissors")};
document.getElementById("reset").onclick = function() {reset_table()};

function choice(playerChoice)
{
        if(computerWins >= 5 || userWins >= 5)
        {
            document.getElementById("result").innerHTML = "Please click the RESET button";
            return;
            
        }
        winner = playRound(playerChoice, getComputerChoice());
        if(winner[2] === "user")
        {
            userWins++;
            if(userWins === 5)
            {                
                document.getElementById("result").innerHTML = "You Win";
            }
        }
        else if(winner[2] === "computer")
        {
            computerWins++;
            if(computerWins === 5)
            {
                document.getElementById("result").innerHTML = "Computer Wins";
            }
        }
        else
        {
            ties++;
            document.getElementById("ties").innerHTML = "Tie";
        }
        display_scores();
        add_row(winner);
}

function playRound(player, computer)
{

    let winner = [];
    winner[0] = player;
    winner[1] = computer;
    if(player === "rock" && computer === "rock")
    {
        winner[2] = "tie";
    }
    else if(player === "rock" && computer === "paper")
    {
        winner[2] = "computer";
    }
    else if(player === "rock" && computer === "scissors")
    {
        winner[2] = "user";
    }
    else if(player === "paper" && computer === "rock")
    {
        winner[2] = "user";
    }
    else if(player === "paper" && computer === "paper")
    {
        winner[2] = "tie";
    }
    else if(player === "paper" && computer === "scissors")
    {
        winner[2] = "computer";
    }
    else if(player === "scissors" && computer === "rock")
    {
        winner[2] = "computer";
    }
    else if(player === "scissors" && computer === "paper")
    {
        winner[2] = "user";
    }
    else if(player === "scissors" && computer === "scissors")
    {
        winner[2] = "tie";
    }
    return winner;
}

function add_row(winner)
{
    let table = document.getElementById("table1");
    let row = table.insertRow(round);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = round;
    cell2.innerHTML = winner[1];
    cell3.innerHTML = winner[0];
    cell4.innerHTML = winner[2];
    round++;
}
function reset_table()
{
    let table = document.getElementById("table1");
    for(let x = 1; x < table.rows.length;)
    {
        table.deleteRow(1);
    }

    computerWins = 0;
    userWins = 0;
    ties = 0;
    document.getElementById("result").innerHTML = "________";
    round = 1;
    display_scores();
}

function display_scores()
{
    document.getElementById("computer_score").innerHTML = ":    " + computerWins;
    document.getElementById("user_score").innerHTML = ":    " + userWins;
    document.getElementById("ties").innerHTML = ":    " + ties;
}