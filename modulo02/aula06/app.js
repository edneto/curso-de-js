//break e continue

const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue
        //pula um loop em particular e faz o loop continuar
        /*Detalhes:
         *ignora os intens a baixo até o próximo loop ser executado
         *Note que no exemplo acima ao executar o '0' não aparece na execução
         *ele foi ignorado
         */
    }


    console.log(scores[i])

    if (scores[i] === 100) {
        console.log(`parabéns, você atingiu a pontuação máxima`)
        break
        // para a execução do loop
        //a interação seguinte não vai acontecer, a execução do arrai foi parada

    }

}