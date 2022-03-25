'use strict';

import {
  DEPOSIT_TYPE,
  TAX_BALANCE,
  TAX_BANK_STATEMENT,
  TAX_DEPOSIT,
  TAX_WITHDRAW,
  TOTAL_COSTS_KEY,
  USERNAME_KEY,
  WITHDRAW_TYPE,
  formatDate,
} from './shared.js';

import { Transaction } from './domain/transaction.js';

/**
	Realiza o depósito
*/
function doDeposit() {
  let value = +$('#campo-deposito').val();

  if (value < 5) {
    $('#campo-deposito').addClass('my-invalid-input');
    $('#msg-deposito')
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
  var price = parseFloat(localStorage.getItem(TOTAL_COSTS_KEY));
  if (netValue < price) {
    price -= netValue;
    tax += netValue;
    netValue = 0;
  } else {
    netValue = netValue - price;
    tax += price;
    price = 0;
  }

  //persiste novamente o custo
  localStorage.setItem(TOTAL_COSTS_KEY, price);

  user.balance += netValue;
  let transaction = new Transaction(netValue, tax, DEPOSIT_TYPE, new Date());
  user.transactions.push(transaction);
  localStorage.setItem(USERNAME_KEY, JSON.stringify(user));

  $('#msg-deposito')
    .removeClass('red')
    .addClass('blue')
    .html('Depósito efetuado com sucesso!')
    .slideDown()
    .delay(3000)
    .slideUp();

  return false;
}

/**
	Realiza o saque
*/
function doWithdraw() {
  const value = parseFloat($('#campo-saque').val());
  const user = JSON.parse(localStorage[USERNAME_KEY]);

  let tax = value * TAX_WITHDRAW;
  let total = value + tax;

  if (total > user.balance) {
    $('#campo-saque').addClass('my-invalid-input');
    $('#msg-saque')
      .html('Opps!!! Saldo insuficiente!')
      .slideDown()
      .delay(3000)
      .slideUp();
    return false;
  }

  const transaction = new Transaction(value, tax, WITHDRAW_TYPE, new Date());
  user.transactions.push(transaction);
  localStorage.setItem(USERNAME_KEY, JSON.stringify(user));

  $('#msg-saque')
    .removeClass('red')
    .addClass('blue')
    .html('Saque realizado com sucesso!')
    .slideDown()
    .delay(3000)
    .slideUp();

  return false;
}

function doBalance() {
  let totalCosts = parseFloat(localStorage.getItem(TOTAL_COSTS_KEY));
  totalCosts += TAX_BALANCE;
  localStorage.setItem(TOTAL_COSTS_KEY, totalCosts);

  let user = JSON.parse(localStorage.getItem(USERNAME_KEY));
  $('#mostra-saldo').html('R$ ' + user.balance.toFixed(2));
}

function doBankStatement() {
  let totalCosts = parseFloat(localStorage.getItem(TOTAL_COSTS_KEY));
  totalCosts += TAX_BANK_STATEMENT;
  localStorage.setItem(TOTAL_COSTS_KEY, totalCosts);

  let user = JSON.parse(localStorage.getItem(USERNAME_KEY));

  const transactions = user.transactions;
  let text = $('#extrato').html();

  for (let i in transactions) {
    var t = transactions[i];
    text +=
      '<tr><td>' +
      formatDate(new Date(t.data)) +
      '</td><td>' +
      t.tipo +
      '</td><td>' +
      t.valor.toFixed(2) +
      '</td><td>' +
      t.tarifa.toFixed(2) +
      '</td></tr>';
  }

  $('#extrato').html(text);

  //saldo
  $('#mostra-saldo-extrato').text('R$ ' + user.balance.toFixed(2));
}

window.onload = function () {
  document.querySelector('#form-deposit').onsubmit = (e) => {
    e.preventDefault();
    doDeposit();
  };
};
