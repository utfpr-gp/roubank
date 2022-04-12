'use strict';

import {
  TAX_BALANCE,
  TOTAL_COSTS_KEY,
  USERNAME_KEY,
} from '../../util/shared.js';

function doBalance() {
  let totalCosts = parseFloat(localStorage.getItem(TOTAL_COSTS_KEY));
  totalCosts += TAX_BALANCE;
  localStorage.setItem(TOTAL_COSTS_KEY, totalCosts);

  let user = JSON.parse(localStorage.getItem(USERNAME_KEY));
  $('#balance-panel').html('R$ ' + user.balance.toFixed(2));
}

/**
 * Dispara quando o DOM está pronto e também os recursos dependentes (CSS, Imagens e JS)
 */
window.onload = function () {
  doBalance();
};
