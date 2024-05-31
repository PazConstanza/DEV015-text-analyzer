import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


let texto=document.querySelector('textarea[name="user-input"]');
let li=document.querySelectorAll("li.contadores");




texto.addEventListener("input", function(){
    
    li[0].textContent = "Caracteres: " + analyzer.getCharacterCount(texto.value)
    li[1].textContent = "Caracteres sin espacio: " + analyzer.getCharacterCountExcludingSpaces(texto.value)
    li[2].textContent = "Palabras: " + analyzer.getWordCount(texto.value)
    li[3].textContent = "Números: " + analyzer.getNumberCount(texto.value)
    li[4].textContent = "Suma Números : " + analyzer.getNumberSum(texto.value)
    li[5].textContent = "Promedio longitud : " + analyzer.getAverageWordLength(texto.value)

    
    
})




let button=document.getElementById("reset-button")
button.addEventListener("click", function(){
    texto.value="";
    

    li[0].textContent = "Caracteres: 0" 
    li[1].textContent = "Caracteres sin espacio: 0" 
    li[2].textContent = "Palabras: 0" 
    li[3].textContent = "Números: 0" 
    li[4].textContent= "Suma Números: 0"
    li[5].textContent= "Promedio longitud: 0"
   
})

