//Module Pattern
(function () {
  //welcome();
})();

/**
	Atribui comportamento aos componentes materialize.	
*/
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems, {});
});

function welcome() {
  alert("Seja bem-vindo ao Roubank! Venha pagar mais taxas para a gente!");
  alert(
    "Vamos ver se está com sorte hoje. Clique em Ok e responda a pergunta mágica!"
  );
  let date = prompt("Hoje é o seu dia de sorte! Qual dia é hoje?");
  let response = confirm(
    "Hoje é o dia do seu aniversário? Clique Ok para Sim e Cancelar para Não."
  );
  if (response) {
    alert(
      "Parabéns! Hoje é o seu dia de sorte, como presente, preparamos taxas exclusivas para você pagar!"
    );
  } else {
    alert(
      "Não é seu aniversário, mas não tem problema, entre que mesmo assim te daremos um lindo presente por meio de taxas para pagar!"
    );
  }
}
