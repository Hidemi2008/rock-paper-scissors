function getCommputerChoice (min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
   let num = Math.floor(Math.random() * (max - min) + min);

   if(num === 0){
    return "Tesoura"
   }else{
    if(num === 1){
        return "Pedra"
    }else{
        return "Papel"
    }
   }
}
let escolhaComputer = getCommputerChoice(0,3)
console.log(getCommputerChoice(0,3))

function getHumanChoice (escolha){
    if(escolha === "PEDRA"){
        return "Pedra"
    }else{
        if(escolha === "TESOURA"){
            return "Tesoura"
        }else{
            return "Papel"
        }
    }
}

let escolha = prompt("Qual a sua escolha ? ")
    escolha = escolha.toUpperCase()

console.log(getHumanChoice(escolha))

let humanScore = 0
let computerScore = 0

function playRound (humanChoise, computerChoise) {
    if(humanChoise === "Tesoura" && computerChoise === "Papel"){
        return humanScore++
    }else{
        if(humanChoise === "Pedra" && computerChoise === "Tesoura"){
            return humanScore++
        }else{
            if(humanChoise === "Papel" && computerChoise === "Pedra"){
                return humanScore++
            }else{
                return computerScore++
            }
        }
    }

}
console.log(playRound(escolha,escolhaComputer))