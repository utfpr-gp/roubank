'use strict';

import {
  TAX_BANK_STATEMENT,
  TOTAL_COSTS_KEY,
  USERNAME_KEY,
  formatFullDate,
} from '../../util/shared.js';

function doBankStatement() {
  let totalCosts = parseFloat(localStorage.getItem(TOTAL_COSTS_KEY));
  totalCosts += TAX_BANK_STATEMENT;
  localStorage.setItem(TOTAL_COSTS_KEY, totalCosts);

  let user = JSON.parse(localStorage.getItem(USERNAME_KEY));

  const transactions = user.transactions;
  let text = $('#table-statement').html();

  for (let i in transactions) {
    var t = transactions[i];
    text +=
      '<tr><td>' +
      formatFullDate(new Date(t.date)) +
      '</td><td>' +
      t.type +
      '</td><td>' +
      t.value.toFixed(2) +
      '</td><td>' +
      t.tax.toFixed(2) +
      '</td></tr>';
  }

  $('#table-statement').html(text);

  //saldo
  $('#div-balance').text('R$ ' + user.balance.toFixed(2));
}

/**
 * Executa imediatamente o DOM estiver pronto.
 */
$(function () {
  doBankStatement();
});
