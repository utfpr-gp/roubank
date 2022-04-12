'use strict';

import {
  TAX_WITHDRAW,
  USERNAME_KEY,
  WITHDRAW_TYPE,
} from '../../util/shared.js';

import { Transaction } from '../../model/transaction.js';

/**
	Realiza o saque
*/
function doWithdraw() {
  const value = parseFloat($('#input-withdraw').val());
  const user = JSON.parse(localStorage[USERNAME_KEY]);

  let tax = value * TAX_WITHDRAW;

  if (value + tax > user.balance) {
    $('#input-withdraw').addClass('my-invalid-input');
    $('#msg-withdraw')
      .html('Opps!!! Saldo insuficiente!')
      .slideDown()
      .delay(3000)
      .slideUp();
    return false;
  }

  user.balance -= value + tax;

  const transaction = new Transaction(value, tax, WITHDRAW_TYPE, new Date());
  user.transactions.push(transaction);
  localStorage.setItem(USERNAME_KEY, JSON.stringify(user));

  $('#msg-withdraw')
    .removeClass('red')
    .addClass('blue')
    .html(
      `Saque de R$ ${value.toFixed(
        2
      )} realizado com sucesso com uma pequena taxa de R$ ${tax.toFixed(2)}`
    )
    .slideDown()
    .delay(3000)
    .slideUp();

  $('#input-withdraw').val('');

  return false;
}

/**
 * Dispara quando o DOM está pronto e também os recursos dependentes (CSS, Imagens e JS)
 */
window.onload = function () {
  document.forms[0].onsubmit = function (e) {
    e.preventDefault();
    doWithdraw();
  };
  $('.money').mask('000.00', {
    reverse: true,
  });
};
