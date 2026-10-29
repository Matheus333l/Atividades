alert("Olá, seja bem-vindo(a)!");                       //Mostrar uma mensagem de boas-vindas          
const nome = prompt("Qual é seu nome ?");               //Solicitar o nome do usuário (prompt retorna uma string)
console.log("Ola", nome);                               //Exibir o nome do usuário no console
alert("Olá, " + nome + "!");                            //Mostrar uma mensagem de boas-vindas personalizada com o nome do usuário escrito no prompt




const a = prompt("Digite um número:");                       // Solicita ao usuário que digite um número
const b = prompt("Digite outro número:");                     // Solicita ao usuário que digite outro número
const c = Number(a) + Number(b);                              // Converte as strings para números e os soma
alert("Seu resultado é: " + c);                                // Mostrar o resultado no alert

if(c % 2 === 0) {                                           // Verifica se o valor de c é par
    alert("O número é par: " + c);                          // Mostra a mensagem e o valor de c no console
} else {                                                    // Executa este bloco quando c não é par
    alert("O número é ímpar: " + c);                        // Mostra a mensagem e o valor de c no console
} 






alert("Informe qual tabuada quer ver:");                                    // Mostrar uma mensagem solicitando ao usuário que informe qual tabuada deseja ver
const tabuada = Number(prompt("Digite um número:"));                        // Solicita ao usuário que digite um número para a tabuada


for (let i = 1; i <= 10; i++) { 
    const resultado1 = tabuada * i;                                          // Loop de 1 a 10 
    alert(tabuada + " x " + i + " = " + resultado1);                          // Mostra a mensagem e o valor de c no console
} 




alert("informe um numero que vou te mostrar os anteriores dele:");                                    // Mostrar uma mensagem solicitando ao usuário que informe um número
const infonumero = Number(prompt("Digite um número:"));                                               // Solicita ao usuário que digite um número

for(let i = 1; i <= infonumero; i++) {
    const resultado = infonumero - i;                                                                // Loop ate 0   
    alert(resultado);                                                                                // Mostra a mensagem e o valor de c no console
} 