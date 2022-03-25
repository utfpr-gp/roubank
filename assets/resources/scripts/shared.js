'use strict';

const USERNAME_KEY = 'tomaz.leite';
const COSTS_KEY = 'custos';
const LOGGED_IN_KEY = 'eh_logado';

export const WITHDRAW_TYPE = 'saque';
export const DEPOSIT_TYPE = 'deposito';

export const TAX_DEPOSIT = 0.01;
export const TAX_WITHDRAW = 0.02;
export const TAX_BALANCE = 0.25;
export const TAX_BANK_STATEMENT = 0.25;

/**
 * Configurações da tela realizadas no carregamento da aplicação
 * de acordo com o estado de login do usuário.
 */
$(function () {
  let isLoggedIn = localStorage.getItem(LOGGED_IN_KEY);

  let menu = isLoggedIn ? '/menu.html' : '/menu-anonimo.html';
  $('#menu').load(menu);
  $('#footer').load('/footer.html');

  setTimeout(function () {
    $('.sidenav').sidenav();
  }, 1000);

  $('.money').mask('000.00', {
    reverse: true,
  });
});

export function formatDate(d) {
  return d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
}

export { USERNAME_KEY, COSTS_KEY as TOTAL_COSTS_KEY, LOGGED_IN_KEY };
