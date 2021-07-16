/**
	Realiza o depósito
*/
function depositar() {
  const TARIFA_PERCENTAGEM = 0.01;
  var valor = parseFloat($("#campo-deposito").val());

  if (valor < 5) {
    $("#campo-deposito").addClass("my-invalid-input");
    $("#msg-deposito")
      .html("Opps!!! O valor precisa ser maior que ou igual a 5 Reais.")
      .slideDown()
      .delay(3000)
      .slideUp();
    return false;
  }

  var usuario = JSON.parse(localStorage.getItem(USERNAME_KEY));

  //tarifa de deposito
  var tarifa = valor * TARIFA_PERCENTAGEM;
  var liquido = valor - tarifa;

  //custos para visualização do saldo e extrato
  var custos = parseFloat(localStorage.getItem(CUSTOS_KEY));
  if (liquido < custos) {
    custos -= liquido;
    tarifa += liquido;
    liquido = 0;
  } else {
    liquido = liquido - custos;
    tarifa += custos;
    custos = 0;
  }

  //persiste novamente o custo
  localStorage.setItem(CUSTOS_KEY, custos);

  usuario.saldo += liquido;
  var transacao = new Transacao(liquido, tarifa, DEPOSITO, new Date());
  usuario.transacoes.push(transacao);
  localStorage.setItem(USERNAME_KEY, JSON.stringify(usuario));

  $("#msg-deposito")
    .removeClass("red")
    .addClass("blue")
    .html("Depósito efetuado com sucesso!")
    .slideDown()
    .delay(3000)
    .slideUp();

  return false;
}

/**
	Realiza o saque
*/
function sacar() {
  const TARIFA_PERCENTAGEM = 0.02;
  var valor = parseFloat($("#campo-saque").val());
  var usuario = JSON.parse(localStorage[USERNAME_KEY]);

  var tarifa = valor * TARIFA_PERCENTAGEM;
  var total = valor + tarifa;

  if (total > usuario.saldo) {
    $("#campo-saque").addClass("my-invalid-input");
    $("#msg-saque")
      .html("Opps!!! Saldo insuficiente!")
      .slideDown()
      .delay(3000)
      .slideUp();
    return false;
  }

  var transacao = new Transacao(valor, tarifa, SAQUE, new Date());
  usuario.transacoes.push(transacao);
  localStorage.setItem(USERNAME_KEY, JSON.stringify(usuario));

  $("#msg-saque")
    .removeClass("red")
    .addClass("blue")
    .html("Saque realizado com sucesso!")
    .slideDown()
    .delay(3000)
    .slideUp();

  return false;
}

function saldo() {
  const CUSTO = 0.25;
  var custos = parseFloat(localStorage.getItem(CUSTOS_KEY));
  custos += custos;
  localStorage.setItem(CUSTOS_KEY, custos);

  var usuario = JSON.parse(localStorage.getItem(USERNAME_KEY));
  $("#mostra-saldo").html("R$ " + usuario.saldo.toFixed(2));
}

function mostraExtrato() {
  const CUSTO = 0.25;
  var custos = parseFloat(localStorage.getItem(CUSTOS_KEY));
  custos += CUSTO;
  localStorage.setItem(CUSTOS_KEY, custos);

  var usuario = JSON.parse(localStorage.getItem(USERNAME_KEY));
  var transacoes = usuario.transacoes;
  var s = $("#extrato").html();

  for (i in transacoes) {
    var t = transacoes[i];
    s +=
      "<tr><td>" +
      formataData(new Date(t.data)) +
      "</td><td>" +
      t.tipo +
      "</td><td>" +
      t.valor.toFixed(2) +
      "</td><td>" +
      t.tarifa.toFixed(2) +
      "</td></tr>";
  }

  $("#extrato").html(s);

  //saldo
  $("#mostra-saldo-extrato").text("R$ " + usuario.saldo.toFixed(2));
}
