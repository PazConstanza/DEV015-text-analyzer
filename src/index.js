import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


let texto=document.querySelector('textarea[name="user-input"]')
let caracteres=document.getElementById("caracteres")
let caracteres_sin_espacio=document.getElementById("caracteres_sin_espacio")
let palabras=document.getElementById("palabras")


texto.addEventListener("input", function(){
    caracteres.textContent = "Caracteres: " + analyzer.getCharacterCount(texto.value)
    caracteres_sin_espacio.textContent = "Caracteres sin espacio: " + analyzer.getCharacterCountExcludingSpaces(texto.value)
    palabras.textContent = "Palabras: " + analyzer.getWordCount(texto.value)
    
    
})




let button=document.getElementById("reset-button")
button.addEventListener("click", function(){
    texto.value="";
    caracteres.textContent = "Caracteres: 0" 
    caracteres_sin_espacio.textContent = "Caracteres sin espacio: 0" 
    palabras.textContent = "Palabras: 0" 
   
})

