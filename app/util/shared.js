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
 * Retorna o ano corrente com quatro dígitos.
 * @returns
 */
export function currentYear() {
  return new Date().getFullYear();
}

function formatZero(date) {
  return parseInt(date) < 10 ? '0' + date : date;
}

export function formatFullDate(d) {
  return (
    formatZero(d.getDate()) +
    '/' +
    formatZero(d.getMonth()) +
    '/' +
    formatZero(d.getFullYear())
  );
}

export { USERNAME_KEY, COSTS_KEY as TOTAL_COSTS_KEY, LOGGED_IN_KEY };
