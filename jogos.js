function probabilidadeDeVitoria(odds) {
    const result = new Array;
    let output = {};

    [...odds].forEach((equipe) => {
        const nomeEquipe = equipe[0]
        const odd = equipe[1]
        const probabilidade = 100 / odd
        const status = probabilidade >= 50 ? "ALTA" : "BAIXA";

        result.push({
            nome: nomeEquipe,
            probabilidade: parseFloat(probabilidade.toFixed(2)),
            status: status
        });
    })

    result.sort((a, b) => b.probabilidade - a.probabilidade);
    result.forEach((equipe) => {
        output[equipe.nome] = `probabilidade de vitória de ${equipe.probabilidade} (${equipe.status})`
    })

    return output
};

console.log(probabilidadeDeVitoria([["Real Madrid", 2.5], ["Barcelona", 1.8], ["Juventus", 3.0]]));
