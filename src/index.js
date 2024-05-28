import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


let texto=document.querySelector('textarea[name="user-input"]');
let li=document.querySelectorAll("li.contadores");
let izquierdo=document.querySelector("li.izquierdo");
let derecho=document.querySelector("li.derecho");



texto.addEventListener("input", function(){
    li[0].textContent = "Caracteres: " + analyzer.getCharacterCount(texto.value)
    li[1].textContent = "Caracteres sin espacio: " + analyzer.getCharacterCountExcludingSpaces(texto.value)
    li[2].textContent = "Palabras: " + analyzer.getWordCount(texto.value)
    li[3].textContent = "Números: " + analyzer.getNumberCount(texto.value)
    
    
})




let button=document.getElementById("reset-button")
button.addEventListener("click", function(){
    texto.value="";
    caracteres.textContent = "Caracteres: 0" 
    caracteres_sin_espacio.textContent = "Caracteres sin espacio: 0" 
    palabras.textContent = "Palabras: 0" 
    numeros.textContent = "Números: 0" 
   
})

