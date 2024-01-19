'use strict';
import { getUsers } from '../functions/api_request.js';

export const ContactsList = async (parentEl, contacts, className) => {
  contacts = await getUsers();
  const list = document.createElement('ul');

  list.className = className;

  for (const [i, contact] of contacts.entries()) {
    // console.log(contact);
    const { id, nom, prenom, portable } = contact;

    const li = document.createElement('li');
    const nomPrenomContainer = document.createElement('div');
    const portableContainer = document.createElement('div');
    const nomEL = document.createElement('span');
    const prenomEl = document.createElement('span');
    nomPrenomContainer.appendChild(nomEL);
    nomPrenomContainer.appendChild(prenomEl);

    const portableEL = document.createElement('span');
    portableContainer.appendChild(portableEL);

    li.appendChild(nomPrenomContainer);
    li.appendChild(portableContainer);
    li.id = id;
    nomEL.innerText = nom;
    prenomEl.innerText = prenom;
    portableEL.innerText = `portable: ${portable}`;
    list.appendChild(li);
  }
  parentEl.appendChild(list);
};
