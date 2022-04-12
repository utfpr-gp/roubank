'use strict';

import { LOGGED_IN_KEY, USERNAME_KEY } from '../../util/shared.js';

window.onload = function () {
  //trata o login
  document.forms[0].onsubmit = function (e) {
    e.preventDefault();

    const username = document.querySelector('#input-username').value;
    const password = document.querySelector('#input-password').value;

    const user = JSON.parse(localStorage.getItem(USERNAME_KEY));

    if (username === user.username && password === user.password) {
      localStorage.setItem(LOGGED_IN_KEY, true);
      window.open('/index.html', '_SELF');
    } else {
      if (username.trim().length === 0 || password.trim().length === 0) {
        alertify.error('Os campos são de preenchimento obrigatório!');
      } else {
        window.setTimeout(() => {
          alertify.alert(
            'Oppsss!',
            'Por favor, verifique seu nome de usuário ou senha e tente novamente!'
          );
        }, 2000);
      }
    }
  };
};
