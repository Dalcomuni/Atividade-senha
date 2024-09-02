const prompt = require('prompt-sync');
const entrada = prompt();

var senha = entrada("digite a senha:");
var senhaCorreta = "2024";

while (senha != senhaCorreta){console.log("senha incorreta"); 
senha = entrada("digite a senha:");}
if (senha == senhaCorreta);
console.log("senha correta");