const analyzer = {                                                // Retorna el recuento de palabras
  getWordCount: (text) => {
    let palabras = 0
    for (let i = 0; i < text.length; i++) {
      if (i === 0 || text[i - 1] === " ") {
        palabras++;
      }
    }
    return palabras;

  },
  getCharacterCount: (text) => {                                  // Retorna el recuento de caracteres
    return text.length

  },


  getCharacterCountExcludingSpaces: (text) => {                   // Retorna el recuento de caracteres, excluye espacios y signos de puntuacion  
    return text.replace(/[\s.,]+/g, "").length;

  },


  getNumberCount: (text) => {                                     // Retorna la cantidad de numeros
    return (text.match(/\b\d+(\.\d+)?\b/g) || []).length

  },

  getNumberSum: (text) => {                                       // Retorna la suma de todos los numeros que no encuentre
    const palabras = text.match(/\b\d+(\.\d+)?\b/g) || [];

    let suma = 0
    palabras.forEach(palabra => {
      if (!isNaN(palabra) && palabra.trim() !== "") {
        suma += parseFloat(palabra);

      }

    });
    return suma

  },

  getAverageWordLength: (text) => {                                 // Retorna la longitud promedio de la palabras
    const totalpalabras = text.split(" ");
    const totalcaracteres = text.replace(/\s+/g, "").length
    const Promedio = totalcaracteres / totalpalabras.length
    return parseFloat(Promedio.toFixed(2));

  },
};

export default analyzer;
