import { RoutesAPI } from '../../util/route-api.js';

export class ContactService {
  save(data) {
    fetch(RoutesAPI.contact(), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log('Erro de solicitação', err));
  }

  findAll() {
    return (
      fetch(RoutesAPI.contact())
        .then((response) => response.json())
        //.then((response) => console.log(response))
        .catch((err) => console.log('Erro de solicitação', err))
    );
  }

  async findAll2() {
    try {
      let response = await fetch(RoutesAPI.contact());
      let list = await response.json();
      return list;
    } catch (err) {
      console.log('Erro de solicitação', err);
    }
  }

  async delete(id) {
    let confirm = window.confirm('Você tem certeza que deseja remover?');
    if (confirm) {
      await fetch(RoutesAPI.contact() + `/${id}`, {
        method: 'DELETE',
      });
    }
  }
}
