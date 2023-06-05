window.addEventListener('DOMContentLoaded', function() {
    const titulosElement = document.querySelector('.titulos');
    const h1Element = titulosElement.querySelector('h1');
    const h2Element = titulosElement.querySelector('h2');
    const fieldsetElements = document.querySelectorAll('fieldset');
    const recomendacoesDiv = document.querySelector('.recomendacoes');
  
    setTimeout(function() {
      titulosElement.classList.add('top');
    });
  
    setTimeout(function() {
      fieldsetElements[0].classList.add('top');
    }, 500);
  
    setTimeout(function() {
      fieldsetElements[1].classList.add('top');
      recomendacoesDiv.classList.add('top');
    }, 1000);
  });
  
  function playMusic(url) {
    var musicPlayer = document.getElementById('musicPlayer');
    musicPlayer.src = url;
    musicPlayer.play();
}

//! isto precisa de ser alterado