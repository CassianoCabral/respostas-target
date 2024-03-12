// Trecho de código fornecido
var INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

// Exibindo apenas o valor de SOMA na página
document.getElementById('resultado').innerHTML = '<p> <b> O valor de SOMA é: ' + SOMA + '</p> </b>';

// Função para verificar se um número pertence à sequência de Fibonacci
function verificaFibonacci(numero) {
    var a = 0;
    var b = 1;
    var c = a + b;

    while (c <= numero) {
        if (c === numero) {
            return true;
        }
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}

// Número para verificar pertencimento à sequência de Fibonacci
var numero = 21; // Altere este valor para verificar outro número

// Verifica e exibe a mensagem na página
var mensagem = "O número " + numero + " ";
if (verificaFibonacci(numero)) {
    mensagem += "pertence à sequência de Fibonacci.";
} else {
    mensagem += "não pertence à sequência de Fibonacci.";
}
document.getElementById('resultado-2').innerHTML = '<p> <b>' + mensagem + '</p> </b>';

// Função para completar a próxima sequência
function completarSequencia(sequencia) {
    var proximoElemento;

    // Lógica para cada sequência
    switch (sequencia) {
        case 'a':
            proximoElemento = 9; // Soma-se 2 ao último elemento
            break;
        case 'b':
            proximoElemento = 128; // Multiplica-se o último elemento por 2
            break;
        case 'c':
            proximoElemento = 49; // Soma-se 7 ao quadrado do índice
            break;
        case 'd':
            proximoElemento = 100; // Soma-se 20 ao quadrado do índice
            break;
        case 'e':
            proximoElemento = 13; // Soma-se os dois últimos elementos
            break;
        case 'f':
            proximoElemento = 20; // Adiciona-se 1 ao último elemento
            break;
        default:
            proximoElemento = 'Não há lógica definida';
    }

    return proximoElemento;
}

// Sequências para completar
var sequencias = ['a', 'b', 'c', 'd', 'e', 'f'];

// String para armazenar resultados
var resultados = '';

// Itera sobre todas as sequências e calcula o próximo elemento
sequencias.forEach(function(sequencia) {
    var proximoElemento = completarSequencia(sequencia);
    resultados += '<p> <b> Próximo elemento da sequência ' + sequencia + ': ' + proximoElemento + '</p> </b>';
});

// Exibe os resultados na página
document.getElementById('resultado-3').innerHTML = resultados;

// Função para resolver o problema dos interruptores e lâmpadas
function resolverProblema() { 
    var resultado = "<b> 1. Primeira visita: Ligue um interruptor e espere alguns minutos. Em seguida, desligue o interruptor.</b>";
    resultado += "<br><b> 2. Segunda visita: Ligue outro interruptor e vá para a sala das lâmpadas.</b>";
    resultado += "<br><b>   - Se a lâmpada estiver acesa, o interruptor que você ligou na primeira vez controla essa lâmpada.</b>";
    resultado += "<br><b>   - Se a lâmpada estiver apagada, mas estiver quente ao toque, o interruptor que você desligou após a primeira visita controla essa lâmpada.</b>";
    resultado += "<br><b>   - Se a lâmpada estiver apagada e fria, o interruptor que você não tocou controla essa lâmpada.</b>";
    
    document.getElementById('resultado-4').innerHTML = resultado;
}

// Chamar a função para resolver o problema quando a página carregar
resolverProblema();

function inverterString() {
    // Obter a string digitada pelo usuário
    var inputString = document.getElementById('inputString').value;

    // Inverter a string
    var invertedString = '';
    for (var i = inputString.length - 1; i >= 0; i--) {
        invertedString += inputString[i];
    }

    // Exibir a pergunta e a string invertida em negrito na página
    var resultado = 'String invertida: <b>' + invertedString + '</b>';
    document.getElementById('resultado-5').innerHTML = resultado;
}

