const generateAlphaRandom = () => {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let serie = '';
    for (let i = 0; i < 3; i++) {
      const indice = Math.floor(Math.random() * letras.length);
      serie += letras.charAt(indice);
    }
    return serie;
};

const generateNumbersRandom = () => {
    let serie = '';
    for (let i = 0; i < 3; i++) {
      const numero = Math.floor(Math.random() * 10);
      serie += numero;
    }
    return serie;
};

export const TitleTaskGenerate = () => {
    return `${generateAlphaRandom()}-${generateNumbersRandom()}`;
}
  