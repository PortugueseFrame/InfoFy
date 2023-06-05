
// Alterna o conteudo da box entre Login e Registo
const box = document.querySelector('.Box');

const linkLogin = document.querySelector('.link-login');
const linkRegister = document.querySelector('.link-register');

const loginForm = document.querySelector('.form-box.login form');
const registerForm = document.querySelector('.form-box.register form');

linkRegister.addEventListener('click', () => {
  box.classList.add('active');
});

linkLogin.addEventListener('click', () => {
  box.classList.remove('active');
});
//

function voltarLogin() {
  window.location.href = "login.html"
}

const contas = [];

// Função para registar uma nova conta
// Função para registar uma nova conta
function registarConta() {
  // Recebe os valores das InputBoxes
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Verifica se o número máximo de contas foi atingido
  if (contas.length >= 3) {
    alert('Limite de contas registas alcançado, lembre-se, ainda estamos em desenvolvimento! :)');
    return;
  }

  // Verifica se o email ou o username já existem
  if (isUsernameTaken(username) || isEmailTaken(email)) {
    alert('Email ou username já registado, por favor registe um diferente!');
    return;
  }

  // Cria um novo objeto (conta)
  const conta = {
    username: username,
    email: email,
    password: password,
  };

  // Adiciona a conta ao array de contas
  contas.push(conta);

  // Limpa os campos
  usernameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';

  // Armazena localmente o username e email
  localStorage.setItem('username123', username);
  localStorage.setItem('email123', email);

  // Função para verificar o username
function isUsernameTaken(username) {
  return contas.some(conta => conta.username === username);
}

// Função para verificar o email
function isEmailTaken(email) {
  return contas.some(conta => conta.email === email);
  }
  
  alert('Conta registada com sucesso!');
}

// Função para monitorizar o login
function Login() {
  // Recebe os dados das InputBoxes
  const emailInput = document.getElementById('emailLogin');
  const passwordInput = document.getElementById('passwordLogin');

  const email = emailInput.value;
  const password = passwordInput.value;

  // Encontra a conta com o email e password correspondentes
  const matchedConta = contas.find(conta => conta.email === email && conta.password === password);

  // Verifica se foi encontrada
  if (matchedConta) {
    // Redireciona para a página principal caso encontre correspondências
    window.location.href = "main.html";
  } else {
    alert('Email ou Password inválido!');
  }

  // Limpa os campos
  emailInput.value = '';
  passwordInput.value = '';
}

function submitQuiz() {
  var form = document.forms[0];
  var genres = [];

  // Recebe os géneros selecionados
  var checkboxes = form.elements["genres"];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      genres.push(checkboxes[i].value);
    }
  }

  var frequency = form.elements["frequency"].value;
  var dob = form.elements["dob"].value;

  // Guarda as respostas
  var answers = {
    genres: genres,
    frequency: frequency,
    dob: dob
  };

  localStorage.setItem("quizAnswers", JSON.stringify(answers));

}

