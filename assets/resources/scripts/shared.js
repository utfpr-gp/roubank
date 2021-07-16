const USERNAME_KEY = "tomaz.leite";
const SAQUE = "saque";
const DEPOSITO = "deposito";
const CUSTOS_KEY = "custos";
const LOGGED_IN_KEY = "eh_logado";

$(function () {
  let isLoggedIn = localStorage.getItem(LOGGED_IN_KEY);

  let menu = isLoggedIn ? "/menu.html" : "/menu-anonimo.html";
  $("#menu").load(menu);
  $("#footer").load("/footer.html");
});

(function () {
  /* 
  Atribui comportamento aos componentes materialize.	
  O evento DOMContentLoaded dispara sem aguardar o carregamento do CSS e JS, apenas do DOM.
  */
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  });
})();

function formataData(d) {
  return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
}
