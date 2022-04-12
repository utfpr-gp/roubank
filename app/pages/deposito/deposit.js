'use strict';

import {
  DEPOSIT_TYPE,
  TAX_DEPOSIT,
  TOTAL_COSTS_KEY,
  USERNAME_KEY,
} from '../../util/shared.js';

import { Transaction } from '../../model/transaction.js';

/**
	Realiza o depósito
*/
function doDeposit() {
  let value = +$('#input-deposit').val();

  if (value < 5) {
    $('#input-deposit').addClass('my-invalid-input');
    $('#div-deposit-message')
      .html('Opps!!! O valor precisa ser maior que ou igual a 5 Reais.')
      .slideDown()
      .delay(3000)
      .slideUp();
    return false;
  }

  const user = JSON.parse(localStorage.getItem(USERNAME_KEY));

  //tarifa de deposito
  let tax = value * TAX_DEPOSIT;
  let netValue = value - tax;

  //custos para visualização do saldo e extrato
  let cost = parseFloat(localStorage.getItem(TOTAL_COSTS_KEY));
  let costBefore = cost;
  if (netValue < cost) {
    cost -= netValue;
    tax += netValue;
    netValue = 0;
  } else {
    netValue = netValue - cost;
    tax += cost;
    cost = 0;
  }

  //persiste novamente o custo
  localStorage.setItem(TOTAL_COSTS_KEY, cost);

  user.balance += netValue;
  let transaction = new Transaction(netValue, tax, DEPOSIT_TYPE, new Date());
  user.transactions.push(transaction);
  localStorage.setItem(USERNAME_KEY, JSON.stringify(user));

  $('#div-deposit-message')
    .removeClass('red')
    .addClass('blue')
    .html(
      `Depósito de R$ ${netValue.toFixed(
        2
      )} efetuado com sucesso considerando a pequena taxa 
    de ${TAX_DEPOSIT * 100}% e os pequenos custos acumulados
    de visualização de saldo e extrato no valor de R$ ${costBefore.toFixed(2)}!`
    )
    .slideDown()
    .delay(3000)
    .slideUp();

  $('#input-deposit').val('');

  return false;
}

/**
 * Dispara quando o DOM está pronto e também os recursos dependentes (CSS, Imagens e JS)
 */
window.onload = function () {
  document.querySelector('#form-deposit').onsubmit = function (e) {
    e.preventDefault();
    doDeposit();
  };
  $('.money').mask('000.00', {
    reverse: true,
  });
};
