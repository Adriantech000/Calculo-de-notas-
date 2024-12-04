document.getElementById('calcular').addEventListener('click', function () {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);
  
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
      document.getElementById('resultado').innerText = 'Por favor, insira todas as notas!';
      return;
    }
  
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
  
    if (media >= 60) {
      document.getElementById('resultado').innerText = `Média: ${media.toFixed(2)}. Parabéns, você passou de ano!`;
    } else {
      document.getElementById('resultado').innerText = `Média: ${media.toFixed(2)}. Infelizmente, você não passou de ano.`;
    }
  });