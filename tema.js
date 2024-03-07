/* O DOM 

/*1. trocar o tema. Para qual?


Saber o tema atual, e obter o elemento tema atual
Oque fazer para trocar o tema:
1.Saber onde esta o atributo do tema
2.Depois fazer a troca
3.Tenho que pegar o elemento com o tema 
4.Apagar o atributo do tema atual 
5.Escrever o atributo do novo tema
6.Mas so vou trocar o tema se o botão for clicado

Como saber se o botao foi clicado, preciso pegar o botao e "ouvir"
e como achar o botão digitar, o ponto significa que estou acessando um 
METODO a um objeto (a função/PROPRIEDADE = atributo  pertencente a um objeto), queryselector = 
escolha  seletor como + atribuir o nome ao botao que foi inserido no index.html e adicionar a 
escuta do evento e especificar oque ele tem que ouvir e depois oque ele tem que fazer. Orientar
oque o click tera que fazer com function  */
/* tem que pegar o elemento com o tema se o tema for light então mude o atributo para dark, se 
não for light então mude o atributo para light.
/*addEventListener = tem dois parametros

/*Funcoes: existem para serem chamadas e no  e todo corpo da função e um parametro se eu nao precisar 
executar ela em outro lugar ela pode ser anônima, sendo a unica função de um botão 

Uma forma de escrever na FUNÇÃO FLEX = ARROW FUNCTION 
Function nome: Função (TO BE DONE COMPLETAR)
*/
document.querySelector('#btTrocaTema').addEventListener('click', function (){
    if (document.documentElement.getAttribute('data-tema') === 'light') {
        document.documentElement.setAttribute('data-tema', 'dark');

 }  else {
        document.documentElement.setAttribute('data-tema', 'light');
 }
});
     