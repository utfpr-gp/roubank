$((function(){let e=localStorage.getItem("eh_logado")?"/menu.html":"/menu-anonimo.html";$("#menu").load(e),$("#footer").load("/footer.html"),setTimeout((function(){$(".sidenav").sidenav(),document.querySelector("#year").textContent=(new Date).getFullYear()}),1e3)})),window.onload=function(){document.forms[0].onsubmit=function(e){e.preventDefault();const t=document.querySelector("#input-username").value,o=document.querySelector("#input-password").value,n=JSON.parse(localStorage.getItem("tomaz.leite"));t===n.username&&o===n.password?(localStorage.setItem("eh_logado",!0),window.open("/index.html","_SELF")):0===t.trim().length||0===o.trim().length?alertify.error("Os campos são de preenchimento obrigatório!"):window.setTimeout((()=>{alertify.alert("Oppsss!","Por favor, verifique seu nome de usuário ou senha e tente novamente!")}),2e3)}};
//# sourceMappingURL=login.b3e921a2.js.map
