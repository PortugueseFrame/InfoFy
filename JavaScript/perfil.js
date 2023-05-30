document.addEventListener('DOMContentLoaded', function() {
  // Vai buscar o valor das variáveis guardadas localmente
  const storedAnswers = localStorage.getItem('quizAnswers');
  const showUsernameElement = document.getElementById('ShowUsername');
  const showEmailElement = document.getElementById('ShowEmail');
  const showGenreElement = document.getElementById('ShowGenre');
  const showAtividadeElement = document.getElementById('ShowAtividade');

  if (storedAnswers && showGenreElement && showAtividadeElement) {
    const answers = JSON.parse(storedAnswers);
    const genres = answers.genres.join(', '); // Junta o array numa string

    showGenreElement.textContent = 'Géneros preferidos: ' + genres;
    showAtividadeElement.textContent = 'Frequência com que ouve música: ' + answers.frequency;
  }

  if (showEmailElement && showUsernameElement) {
    const username = localStorage.getItem('username123');
    const email = localStorage.getItem('email123');

    showUsernameElement.textContent = 'Username: ' + username;
    showEmailElement.textContent = 'Email: ' + email;
  }
});
