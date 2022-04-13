'use strict';

//import '/node_modules/materialize-css/dist/js/materialize.js';

//import * as $ from '/node_modules/jquery/dist/jquery.js';

import { LOGGED_IN_KEY, currentYear } from '/app/util/shared.js';

//import * as M from '/node_modules/materialize-css/dist/js/materialize.js';

/**
 * Configurações da tela realizadas no carregamento da aplicação
 * de acordo com o estado de login do usuário.
 */

setTimeout(
  $(function () {
    let isLoggedIn = localStorage.getItem(LOGGED_IN_KEY);

    let menu = isLoggedIn
      ? `/app/layout/menu.html`
      : `/app/layout/menu-anonimo.html`;
    $('#menu').load(menu);
    $('#footer').load(`/app/layout/footer.html`);

    setTimeout(function () {
      let e = document.querySelector('.sidenav');
      M.Sidenav.init(e, {});
      //$('.sidenav').sidenav();

      document.querySelector('#year').textContent = currentYear();
    }, 3000);
  }),
  3000
);
