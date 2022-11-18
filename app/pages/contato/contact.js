'use strict';

import { ContactService } from './contact.service.js';

window.onload = function () {
  let contactService = new ContactService();
  contactService.findAll().then((data) => {
    let rows = '';
    for (let e of data) {
      rows += `
        <tr>
            <td>${e.name}</td>
            <td>${e.email}</td>
            <td>${e.message}</td>
            <td>
                <a onclick="onDelete(${e.id})"><i class="material-icons">delete</i></a>
            </td>
        </tr>
        `;
    }
    let table = document.getElementById('contact-table');
    table.innerHTML = rows;
  });

  document.forms[0].onsubmit = function (e) {
    e.preventDefault();

    let name = document.getElementById('name-input').value;
    let email = document.getElementById('email-input').value;
    let message = document.getElementById('message-input').value;

    let contact = { name: name, email: email, message: message };
    contactService.save(contact);
  };
};

function onDelete(id) {
  let contactService = new ContactService();
  contactService.delete(id).then();
}
//para ser acessado no HTML
window.onDelete = onDelete;
