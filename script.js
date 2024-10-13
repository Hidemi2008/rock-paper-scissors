let escolha1 = document.querySelector('#escolha1')
let escolha2 = document.querySelector('#escolha2')
let escolha3 = document.querySelector('#escolha3')

let espaco = document.querySelector('#conteiner')

for(let n = 0; n < 5; n++){

    escolha1.addEventListener("click", () =>{
        let escolha = "Pedra"
        let escolhaHumana = getHumanChoice(escolha)
        let p1 = document.createElement('p')
        
        p1.textContent = "A sua escolha foi " + escolhaHumana
        espaco.appendChild(p1)
    
        
        let escolhaComputer = getCommputerChoice(0,3)
        let p2 = document.createElement('p')
    
        p2.textContent = "A escolha do adversário foi  " + escolhaComputer
        espaco.appendChild(p2)
        
    
        let game = playRound(escolhaHumana,escolhaComputer)
        console.log(game)
    
        let p3 = document.createElement('p')
        
        p3.textContent = "O resultado final foi " + game
        espaco.appendChild(p3)
    
        return game
    
    
    
    
    
    })
    
    
    escolha2.addEventListener("click", () =>{
        let escolha =  "Tesoura"
        let escolhaHumana = getHumanChoice(escolha)
        let p1 = document.createElement('p')
        p1.textContent = "A sua escolha foi " + escolhaHumana
        espaco.appendChild(p1)
    
        
        let escolhaComputer = getCommputerChoice(0,3)
        let p2 = document.createElement('p')
        p2.textContent = "A escolha do adversário foi  " + escolhaComputer
        espaco.appendChild(p2)
    
        let game = playRound(escolhaHumana,escolhaComputer)
    
        let p3 = document.createElement('p')
        p3.textContent = "O resultado final foi " + game
        espaco.appendChild(p3)
    
        return game
    
    
    
    })
    
    escolha3.addEventListener("click", () =>{
        let escolha =  "Papel"
        let escolhaHumana = getHumanChoice(escolha)
        let p1 = document.createElement('p')
        p1.textContent = "A sua escolha foi " + escolhaHumana
        espaco.appendChild(p1)
    
        
        let escolhaComputer = getCommputerChoice(0,3)
        let p2 = document.createElement('p')
        p2.textContent = "A escolha do adversário foi  " + escolhaComputer
        espaco.appendChild(p2)
    
        let game = playRound(escolhaHumana,escolhaComputer)
    
        let p3 = document.createElement('p')
        p3.textContent = "O resultado final foi " + game
        espaco.appendChild(p3)
    
        return game
    
    
    
    })
    
}



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
        escolha = escolha.toUpperCase()
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
        return  humanScore++
    }else{
        if(humanChoise === "PEDRA" && computerChoise === "TESOURA"){
            return  humanScore++
        }else{
            if(humanChoise === "PAPEL" && computerChoise === "PEDRA"){
                return  humanScore++
            }else{
                if(humanChoise === computerChoise){
                    return  empate++
                }else{
                    return  computerScore++
                }
            }
        }
    }
    }

    let humanScore = 0
    let computerScore = 0
    let empate = 0
    
//Criar 5 rodadas do jogo. 
    function playGame (num){
        for(let n =0; n < num; n++){

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



    








    

