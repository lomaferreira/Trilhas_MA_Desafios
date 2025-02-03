/*QUESTÃO 1*/
let nome ="Paloma"; //Define uma variavel nome e imprime no console
console.log("Nome: " + nome);

/*QUESTÃO 2*/
let idade = 25;
let altura = 1.75; //Define uma idade e altura e imprime no console
console.log("Altura: " + altura + " Idade: " + idade); 

/*QUESTÃO 3*/
let preco = 50;
let desconto = 0.2
let valorDesconto= preco * desconto; //Calcula o desconto sobre a variavel preco e o valor do desconto, e imprime no console
console.log("O seu desconto eh: " + valorDesconto +" R$");

/*QUESTÃO 4*/
let temperatura = 30;
if(temperatura > 25){ //Define uma temperatura e testa se esta calor ou fresco
    console.log("Esta calor!");
}else{
    console.log("Esta fresco!");
}

/*QUESTÃO 5*/
let idade2=16;
if(idade2>=18){ //Atribui uma idade a variavel idade2 e e testa se é maior ou igual a 18
    console.log("Você é maior de idade");
}else{
    console.log("Você é menor de idade");
}

/*QUESTÃO 6*/
let nota=7;
if(nota >= 7){  //Define uma nota e testa se o aluno foi aprovado, reprovado ou ficou de recuperação
    console.log("Aprovado!");
}else if( 5 <= nota <= 6 ){
    console.log("Recuperação!");
}else{
    console.log("Reprovado!");
}

/*QUESTÃO 7*/
let numero1=3.2;
let numero2=9.5;  //Testa se dado dois números eles são iguais
if(numero1==numero2){
    console.log("Os números são iguais!");
}else{
    console.log("Os números são diferentes!");
}

/*QUESTÃO 8*/
let nome1= "Joãozinho";
let idade1= 13;  //Define um nome e uma idade e imprime no console
console.log("Olá, meu nome é " + nome1 +" e eu tenho " +idade1 +" anos");

/*QUESTÃO 9*/
for(i=0; i<=10; i++){ //Imprime de 0 a 10
    console.log(i);
}

/*QUESTÃO 10*/
let numeroCerto=5;  //Define um número certo e cria um loop que continua a pedir uma entrada do usúario a enquanto o valor for diferente do número certo
let tentativa=prompt("Digite um número:");
while(tentativa!=numeroCerto){
    tentativa=prompt("Digite um número:");
}
alert("Você acertou!");

/*QUESTÃO 11*/
let tabuada=7;
for(i=1;i<=10;i++){ //Imprime a tabuada do 7
    console.log("7x"+ i + " = " + tabuada*i);
}

/*QUESTÃO 12*/
for(i=0; i<=20;i++){ //Imprime apenas os números pares
    if(i%2==0){
        console.log("É par o numero: " + i);
    }
}

/*QUESTÃO 13*/
let raio= 2;
function calcularAreaCirculo(raio){
    return 3.14*(raio*raio); //Calcula a área de um circulo recebendo o raio como parâmetro
}
console.log(`A area do circulo de raio ${raio} é : ` + calcularAreaCirculo(raio));

/*QUESTÃO 14*/
let num1= 2; //Atribui um valor a variavel num1
let num2= 8; //Atribui um valor a variavel num2
let soma= num1 + num2; //Variavel para armazenar a soma de dois valores
console.log("O resultado da soma é: " + soma); // Imprime no console o resultado da soma

/*QUESTÃO 15*/
let valor1= 10;
let valor2=20; //Define dois valores a ser somado pela função de somarValore e imprime o resultado no final
function somarValores(valor1, valor2){
    return valor1 + valor2;
}
console.log("O resultado da soma é: " + somarValores(valor1, valor2));