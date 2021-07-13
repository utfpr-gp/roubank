window.onload = function () {
  const LIMIT = 10000;
  document.getElementById("tax-span").innerText = parseInt(
    Math.random() * LIMIT
  );

  window.setInterval(function () {
    let value = document.getElementById("tax-span").innerText;
    document.getElementById("tax-span").textContent = (
      parseInt(value) +
      Math.random() * 100
    ).toFixed(2);
  }, 3000);
};

//welcome();

//diálogos
function welcome() {
  window.alert(
    "Seja bem-vindo ao Roubank! Venha pagar mais taxas para a gente!"
  );
  alert(
    "Vamos ver se está com sorte hoje. Clique em Ok e responda a pergunta mágica!"
  );

  let date = prompt("Hoje é o seu dia de sorte! Qual dia é hoje?");

  let response = confirm(
    "Hoje é o dia do seu aniversário? Clique Ok para Sim e Cancelar para Não."
  );

  if (response) {
    alert(
      `Parabéns! Hoje é dia ${date}, quem faz o aniversário é você, mas o presente é nosso! 
        Como presente, preparamos taxas exclusivas para você pagar!`
    );
  } else {
    alert(
      "Não é seu aniversário, mas não tem problema, entre que mesmo assim te daremos um lindo presente por meio de taxas para pagar!"
    );
  }
}

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
