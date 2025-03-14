window.alert('Olá, mundo!');
let nome = String(window.prompt('Qual seu nome?'));
let segundo_nome = String('Eridan');
console.log(nome,segundo_nome);
// document.write('Meu numero ' + 10);
let text = "Apple, Banana, Kiwi";
let tamanho = text.length;
let part = text.slice(7,13);
console.log(part);
let text1= "Olá mundo";
let text2 = text1.toUpperCase();
idade = parseInt(prompt('Qual sua idade?'));
// idade=parseInt(idade);
console.log(typeof idade);
console.log(`${nome} tem ${idade} anos`);
function myFunction(p1,p2){
    return p1 * p2;
}
console.log(myFunction(10,20));