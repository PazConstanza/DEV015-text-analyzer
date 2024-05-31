


const analyzer = {  
  getWordCount: (text) => {
    let palabras = 0
    for (let i = 0; i <text.length; i++) {
      if(i === 0 || text[i - 1] === " ") {
        palabras++; 
      }
    }
    return palabras;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  
  
  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/\s+/g, "").length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  

  getNumberCount: (text) => {
    return (text.match(/\d+/g) || []).length
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  
  getNumberSum: (text) => {
    let palabras=text.split(' ')
    
    let suma=0
    palabras.forEach(palabra => {
      if(!isNaN(palabra) && palabra.trim() !== "") {
        suma += parseInt(palabra); 
        console.log(suma)
    }
      
    });
    return suma
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },



  getAverageWordLength: (text) => { 
    let totalpalabras=text.split(" ");
    let totalcaracteres=text.replace(/\s+/g, "").length
    let Promedio=totalcaracteres/totalpalabras.length
    return Promedio;
  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
},
};

export default analyzer;
