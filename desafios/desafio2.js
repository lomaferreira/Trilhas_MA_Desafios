/*QUESTÃO 1*/
let num=prompt('Informe um número:');
while(num!=3){
    num=prompt('Informe um número:');
}

/*QUESTÃO 2*/
let tentativas=0;
do{
    let senhaReal=1234
    let tentativaSenha=prompt('Insira sua senha:')
    if(senhaReal==tentativaSenha && tentativas<3){
        alert('Acesso concedido!')
        break;
    }
    if(senhaReal!=tentativaSenha && tentativas==2){
        alert('Senha bloqueada!')
    }
    tentativas++;
}while(tentativas<3);

/*QUESTÃO 3*/
let list=[1,2,34,6]
alert(`Lista com 4 elementos : ${list}`)

/*QUESTÃO 4*/
let list2=[];
while(list2.length<5){
    numeros=prompt('Insira um número:');
    list2.push(numeros);
}
alert(`Lista com 5 elementos : ${list2}`);

/*QUESTÃO 5*/
function mensagem(){
    return 'Hello World!'
}
alert(mensagem());

/*QUESTÃO 6*/
function mensagemPersonalizada(nome){
    return `Olá, ${nome}, que bom ter você no programa Trilhas.`;
}
alert(mensagemPersonalizada('Paloma'));

/*QUESTÃO 7*/
function calcularQuadrado(numero){
    return numero*numero;
}
alert(`Resultado do 9²= ${calcularQuadrado(9)}`);

/*QUESTÃO 8*/
function Subtracao(num1, num2){
    return num1-num2;
}
alert(`Resultado da subtração de 10-5= ${Subtracao(10,5)}`);


 