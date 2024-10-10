let escolha1 = document.querySelector('#escolha1')
let escolha2 = document.querySelector('#escolha2')
let escolha3 = document.querySelector('#escolha3')

let espaco = document.querySelector('div')


escolha1.addEventListener("click", () =>{
    let escolha = escolha1.textContent = "PEDRA"
    console.log(escolha)
    let escolhaHumana = getHumanChoice(escolha)
    console.log(escolhaHumana)
    
    let escolhaComputer = getCommputerChoice(0,3)

    let game = playRound(escolhaHumana,escolhaComputer)
    console.log(game)

    let div = document.createElement('div')

    div.appendChild(espaco)
    div.textContent = game


})
escolha2.addEventListener("click", () =>{
    let escolha = escolha2.textContent = "TESOURA"
    console.log(escolha)
    let escolhaHumana = getHumanChoice(escolha)
    console.log(escolhaHumana)

    let escolhaComputer = getCommputerChoice(0,3)

    let game = playRound(escolhaHumana,escolhaComputer)
})
escolha3.addEventListener("click", () =>{
    let escolha = escolha3.textContent = "PAPEL"
    console.log(escolha)
    let escolhaHumana = getHumanChoice(escolha)
    console.log(escolhaHumana)

    let escolhaComputer = getCommputerChoice(0,3)

    let game = playRound(escolhaHumana,escolhaComputer)
})





/*Criação de um número aleatorio e sua escolha. */
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
    /*Pegar a escolha humana. */
    function getHumanChoice (escolha){
        if(escolha === "PEDRA"){
            return "Pedra"
        }else{
            if(escolha === "TESOURA"){
                return "Tesoura"
            }else{
                if(escolha === "PAPEL"){
                return "Papel"
            }
        }
    }
}
    
    /*Criar a primeira rodada do jogo. */
    function playRound (humanChoise, computerChoise) {
    
    humanChoise = humanChoise.toUpperCase()
    computerChoise = computerChoise.toUpperCase()

    
    if(humanChoise === "TESOURA" && computerChoise === "PAPEL"){
        return "Você venceu, sua pontuação" + humanScore++
    }else{
        if(humanChoise === "PEDRA" && computerChoise === "TESOURA"){
            return "Você venceu, sua pontuação" + humanScore++
        }else{
            if(humanChoise === "PAPEL" && computerChoise === "PEDRA"){
                return "Você venceu, sua pontuação" + humanScore++
            }else{
                if(humanChoise === computerChoise){
                    return "Você empatou, a pontuacão ficou" + empate++
                }else{
                    return "Você perdeu, a pontuação do seu rival " +  computerScore++
                }
            }
        }
    }
    }

    let humanScore = 0
    let computerScore = 0
    let empate = 0
    /*
//Criar 5 rodadas do jogo. 
    function playGame (num){
        for(let n =0; n < num; n++){
            let escolhaComputer = getCommputerChoice(0,3)
            console.log(escolhaComputer)

            let escolha = prompt("Qual a sua escolha ? ")
            escolha = escolha.toUpperCase()
            let escolhaHumana = getHumanChoice(escolha)
            console.log(escolhaHumana)

            let game = playRound(escolhaHumana,escolhaComputer)
        }
        console.log(humanScore)
        console.log(computerScore)
        console.log(empate)

        if(humanScore > 2){
            console.log(`Parabens você venceu!!!`)
        }else{
            if(computerScore > 2){
                console.log(`Você perdeu, tente novamente!!!`)
            }else{
                if(empate > 2){
                    console.log(`Você empatou, tente novamente!!!`)
                }else{
                    if(humanScore === 2 && computerScore === 2 && empate === 1){
                        console.log(`Você empatou, tente novamente!!!`)
                    }
                }
            }
        }

    }

    let escolhaComputer = getCommputerChoice(0,3)
    console.log(escolhaComputer)
    
    
    let escolha = prompt("Qual a sua escolha ? ")
        escolha = escolha.toUpperCase()
    let escolhaHumana = getHumanChoice(escolha)
    console.log(escolhaHumana)

        let rodada = playRound(escolhaHumana,escolhaComputer)
    
    
    let humanScore = 0
    let computerScore = 0
    let empate = 0






    let play = playGame(5)
    

*/