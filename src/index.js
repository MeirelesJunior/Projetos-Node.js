const player1 = {
    Nome: "Mario",
    Velocidade: 4,
    Manobrabilidade: 3,
    Poder: 3,
    Pontos: 0
}

const player2 = {
    Nome: "Luigi",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 4,
    Pontos: 0
}

const player3 = {
    Nome: "Peach",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 2,
    Pontos: 0
}

const player4 = {
    Nome: "Yoshi",
    Velocidade: 2,
    Manobrabilidade: 4,
    Poder: 3,
    Pontos: 0
}

const player5 = {
    Nome: "Donkey Kong",
    Velocidade: 2,
    Manobrabilidade: 2,
    Poder: 5,
    Pontos: 0
}

const player6 = {
    Nome: "Bowser",
    Velocidade: 5,
    Manobrabilidade: 2,
    Poder: 5,
    Pontos: 0
}

//Funcão de jogar o dado
//floor arredonda um numero, random gera um número aleatorio
// somando com +1 porque ele conta de 1 a 5
async function rollDice(){
   
   return Math.floor(Math.random() * 6) + 1;
}

//função pra gerar um bloco aleatorio
async function getRandomBlock(){
    let random =  Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
            default:
            result = "CONFRONTO";
    }
    return result;
}

//funcao para reportar os resultados da corrida
async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)

}

//função assincrona para  iniciar a corrida com os players que será chamada dentro da function main
 async function playRaceEngine(character1,character2){
    for(let round = 1; round <=5; round ++){
        console.log(`🚩 Rodada ${round}`);

        //sorteando bloco e windons . abre telinha de imagens
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)

        //rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();
        

        //teste de habilidade, guardará o valor do dado e o valor da habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if(block == "RETA"){
            totalTestSkill1 = diceResult1 + character1.Velocidade;
            totalTestSkill2 = diceResult1 + character2.Velocidade;

            await logRollResult(character1.Nome,"velocidade",diceResult1,character1.Velocidade)
            await logRollResult(character2.Nome,"velocidade",diceResult1,character2.Velocidade)
           
        }
        if(block == "CURVA"){
            totalTestSkill1 = diceResult1 + character1.Manobrabilidade;
            totalTestSkill2 = diceResult1 + character2.Manobrabilidade;

            await logRollResult(character1.Nome,"manobrabilidade",diceResult1,character1.Manobrabilidade)
            await logRollResult(character2.Nome,"manobrabilidade",diceResult1,character2.Manobrabilidade)
        }
        if(block == "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.Poder;
            let powerResult2 = diceResult2 + character2.Poder;

            console.log(`${character1.Nome} confrontou com ${character2.Nome}! 🥊`);

            await logRollResult(character1.Nome,"poder",diceResult1,character1.Poder);
            await logRollResult(character2.Nome,"poder",diceResult1,character2.Poder);


            if(powerResult1 > powerResult2 && character2.Pontos > 0){
                console.log(`${character1.Nome} venceu o confronto! ${character2.Nome} perdeu 1 ponto 🐢`);
                character2.Pontos--;
            }
            
            if(powerResult2 > powerResult1 && character1.Pontos > 0){
                console.log(`${character2.Nome} venceu o confronto! ${character1.Nome} perdeu 1 ponto 🐢`)
                character1.Pontos--;
            }
             
         
            console.log(powerResult1 === powerResult2 ? "Confronto empatado! Nenhum ponto foi perdido": "");
           
        }

        //Verificando o vencedor
        if(totalTestSkill1 > totalTestSkill2){
            console.log(`${character1.Nome} marcou um ponto!`);
            character1.Pontos++;
        }else if(totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.Nome} marcou um ponto!`);
            character2.Pontos++;
        }

        console.log("--------------*--------------")
    }

        
}

async function declareWinner(character1, character2){
    console.log("Resultado final:");
    console.log(`${character1.Nome}: ${character1.Pontos}`)
    console.log(`${character2.Nome}: ${character2.Pontos}`)

    if(character1.Pontos  > character2.Pontos){
        console.log(`\n${character1.Nome} venceu a corrida! Parabéns🏆 `);
    }else if(character2.Pontos > character1.Pontos){
        console.log(`\n${character2.Nome} venceu a corrida! Parabéns🏆 `);
    }else{
        console.log("A corrida terminou em empate");
    }
}

//Função principal, sendo auto- invocavel pela ()
(async function main(){
    console.log(
        `🏁🚨 Corrida  entre ${player1.Nome} e ${player2.Nome} começando... \n`
    );

   await playRaceEngine(player1,player2)
   await declareWinner(player1,player2)
})();

