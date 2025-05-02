# Calculadora de Probabilidade de Vitória

Este projeto contém uma função em JavaScript que calcula a probabilidade de vitória de equipes com base em suas odds de apostas.

## 📜 Descrição

A função `probabilidadeDeVitoria(odds)` recebe uma lista de pares `[nome, odd]`, onde `nome` representa a equipe e `odd` indica a cotação associada à sua vitória. A função calcula a probabilidade percentual de vitória de cada equipe e classifica como **ALTA** ou **BAIXA** dependendo do valor obtido.

## 📌 Estrutura do Código

A função realiza os seguintes passos:
1. Itera sobre a lista de odds, calculando a probabilidade percentual (`100 / odd`).
2. Define um status para cada equipe com base na probabilidade (`ALTA` para valores >= 50% e `BAIXA` para valores menores).
3. Ordena as equipes por probabilidade de vitória, do maior para o menor.
4. Retorna um objeto
