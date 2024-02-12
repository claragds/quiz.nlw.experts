const perguntas = [
    {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
            "A. Retorna o tipo de dado de uma variável ou expressão.",
            "B. Converte uma string para um número.",
            "C. Retorna o comprimento de uma string."
        ],
        correta: 0
    },
    {
        pergunta: "Qual destes não é um tipo de dado primitivo em JavaScript?",
        respostas: [
            "A. String",
            "B. Array",
            "C. Boolean"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        respostas: [
            "A. var myVar;",
            "B. variável myVar;",
            "C. let myVar;"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do método 'querySelector'?",
        respostas: [
            "A. Retorna o primeiro elemento que corresponde a um seletor CSS especificado em um documento.",
            "B. Retorna todos os elementos que correspondem a um seletor CSS especificado em um documento.",
            "C. Retorna o número de elementos que correspondem a um seletor CSS especificado em um documento."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
        respostas: [
            "A. 5",
            "B. '32'",
            "C. TypeError"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de comentar uma única linha em JavaScript?",
        respostas: [
            "A. <!-- Comentário -->",
            "B. // Comentário",
            "C. /* Comentário */"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a saída do seguinte código: console.log(typeof undefined);",
        respostas: [
            "A. 'null'",
            "B. 'undefined'",
            "C. 'object'"
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'push' faz em um array em JavaScript?",
        respostas: [
            "A. Adiciona um elemento ao início do array.",
            "B. Adiciona um elemento ao final do array.",
            "C. Remove o último elemento do array."
        ],
        correta: 1
    },
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas: [
            "A. Compara valores sem considerar o tipo.",
            "B. Compara valores e tipos.",
            "C. Atribui um valor a uma variável."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma correta de verificar se uma variável não é nula em JavaScript?",
        respostas: [
            "A. if (myVar == null) { /* código */ }",
            "B. if (myVar === null) { /* código */ }",
            "C. if (myVar !== null) { /* código */ }"
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (let item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)

    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}