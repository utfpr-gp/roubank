'use strict';

import {
  LOGGED_IN_KEY,
  TOTAL_COSTS_KEY,
  USERNAME_KEY,
} from '../util/shared.js';

/**
	Cadastra um usuário default para funcionamento do login.
	Só realiza o cadastro caso o usuário ainda não esteja salvo no WebStorage.
*/
function initializeUsers() {
  if (localStorage.getItem(USERNAME_KEY) != null) {
    return false;
  }

  //usuário definido na forma literal
  var user = {
    username: USERNAME_KEY,
    password: 'qwerty',
    balance: 0,
    transactions: [],
  };

  localStorage.setItem(USERNAME_KEY, JSON.stringify(user));
  localStorage.setItem(TOTAL_COSTS_KEY, 0);
  localStorage.setItem(LOGGED_IN_KEY, false);
}

/**
 * Apresenta ou esconde o painel de operações de acordo com o estado de login.
 */
function showOperations() {
  var isLoggedIn = localStorage.getItem(LOGGED_IN_KEY);

  if (isLoggedIn === 'true') {
    $('#painel-login').hide();
    $('#painel-servicos').fadeIn();
  }
}

//diálogos de boas vindas
function welcome() {
  window.alert(
    'Seja bem-vindo ao Roubank! Venha pagar mais taxas para a gente!'
  );
  alert(
    'Vamos ver se está com sorte hoje. Clique em Ok e responda a pergunta mágica!'
  );

  let date = prompt('Hoje é o seu dia de sorte! Qual dia é hoje?');

  let response = confirm(
    'Hoje é o dia do seu aniversário? Clique Ok para Sim e Cancelar para Não.'
  );

  if (response) {
    alert(
      `Parabéns! Hoje é dia ${date}, quem faz o aniversário é você, mas o presente é nosso! 
        Como presente, preparamos taxas exclusivas para você pagar!`
    );
  } else {
    alert(
      'Não é seu aniversário, mas não tem problema, entre que mesmo assim te daremos um lindo presente por meio de taxas para pagar!'
    );
  }
}

/**
 * Inicializa a aplicação com o cadastro de um usuário padrão e
 * também com a apresentação de alguns dados.
 */
window.onload = function () {
  showOperations();
  initializeUsers();
  //welcome();

  const LIMIT = 10000;
  document.getElementById('tax-span').innerText = parseInt(
    Math.random() * LIMIT
  );

  window.setInterval(function () {
    let value = document.getElementById('tax-span').innerText;
    document.getElementById('tax-span').textContent = (
      parseInt(value) +
      Math.random() * 100
    ).toFixed(2);
  }, 3000);
};
