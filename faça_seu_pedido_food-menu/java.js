const dish = document.getElementById('dish');
const dish1 = document.getElementById('dish1');
const dish2 = document.getElementById('dish2');
const dish3 = document.getElementById('dish3');
const dish4 = document.getElementById('dish4');
const dish5 = document.getElementById('dish5');

dish1.addEventListener('click', () => {
    dish.src = "images/dish1.png"
})
dish2.addEventListener('click', () => {
    dish.src = "images/dish2.png"
})
dish3.addEventListener('click', () => {
    dish.src = "images/dish3.png"
})
dish4.addEventListener('click', () => {
    dish.src = "images/dish4.png"
})
dish5.addEventListener('click', () => {
    dish.src = "images/dish5.png"
})

var titulo = document.querySelector(".nome_prato")
var troca_nome1 = document.querySelector(".dish1")
var troca_nome2 = document.querySelector(".dish2")
var troca_nome3 = document.querySelector(".dish3")
var troca_nome4 = document.querySelector(".dish4")
var troca_nome5 = document.querySelector(".dish5")

troca_nome1.addEventListener('click', function () {
    titulo.textContent = "Prato 1";
})
troca_nome2.addEventListener('click', function () {
    titulo.textContent = "Prato 2";
})
troca_nome3.addEventListener('click', function () {
    titulo.textContent = "Prato 3";
})
troca_nome4.addEventListener('click', function () {
    titulo.textContent = "Prato 4";
})
troca_nome5.addEventListener('click', function () {
    titulo.textContent = "Prato 5";
})

var chamada = document.querySelector(".chamada_prato")
var troca_chamada1 = document.querySelector(".dish1")
var troca_chamada2 = document.querySelector(".dish2")
var troca_chamada3 = document.querySelector(".dish3")
var troca_chamada4 = document.querySelector(".dish4")
var troca_chamada5 = document.querySelector(".dish5")

troca_chamada1.addEventListener('click', function () {
    chamada.textContent = "CHAMADA ESPECIAL PRATO 1";
})
troca_chamada2.addEventListener('click', function () {
    chamada.textContent = "CHAMADA ESPECIAL PRATO 2";
})
troca_chamada3.addEventListener('click', function () {
    chamada.textContent = "CHAMADA ESPECIAL PRATO 3";
})
troca_chamada4.addEventListener('click', function () {
    chamada.textContent = "CHAMADA ESPECIAL PRATO 4";
})
troca_chamada5.addEventListener('click', function () {
    chamada.textContent = "CHAMADA ESPECIAL PRATO 5";
})

var receita = document.querySelector(".receita_prato")
var troca_receita1 = document.querySelector(".dish1")
var troca_receita2 = document.querySelector(".dish2")
var troca_receita3 = document.querySelector(".dish3")
var troca_receita4 = document.querySelector(".dish4")
var troca_receita5 = document.querySelector(".dish5")

troca_receita1.addEventListener('click', function () {
    receita.textContent = "Receita completa do prato 1";
})
troca_receita2.addEventListener('click', function () {
    receita.textContent = "Receita completa do prato 2";
})
troca_receita3.addEventListener('click', function () {
    receita.textContent = "Receita completa do prato 3";
})
troca_receita4.addEventListener('click', function () {
    receita.textContent = "Receita completa do prato 4";
})
troca_receita5.addEventListener('click', function () {
    receita.textContent = "Receita completa do prato 5";
})