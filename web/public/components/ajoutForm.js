'use strict';

import { addContact } from '../functions/api_request.js';

export const FormContact = (parentEl, contacts, className) => {
  const form = document.createElement('form');
  form.className = className;
  const rowForm = document.createElement('div');
  rowForm.className = `form-row`;
  form.appendChild(rowForm);
  parentEl.appendChild(form);

  //   ******NOM CHAMP
  //   nom LABEL
  const nomLabel = document.createElement('label');
  nomLabel.htmlFor = 'nom';
  nomLabel.id = 'label-nom';
  nomLabel.innerText = 'Nom';
  rowForm.appendChild(nomLabel);
  //   nom input
  const nom = document.createElement('input');
  nom.id = 'nom';
  nom.required = true;
  nom.name = 'nom';
  nom.type = 'text';
  rowForm.appendChild(nom);

  // fin de nom champ

  //   ******PRENOM CHAMP
  //   prenom LABEL
  const prenomLabel = document.createElement('label');
  prenomLabel.htmlFor = 'prenom';
  prenomLabel.id = 'label-prenom';
  prenomLabel.innerText = 'Prenom';
  rowForm.appendChild(prenomLabel);
  //   prenom input
  const prenom = document.createElement('input');
  prenom.id = 'prenom';
  prenom.required = true;
  prenom.name = 'prenom';
  prenom.type = 'text';
  rowForm.appendChild(prenom);
  // fin de prenom champ

  //   **** PORTABLE CHAMP
  // portable label
  const portableLabel = document.createElement('label');
  portableLabel.htmlFor = 'portable';
  portableLabel.id = 'label-portable';
  portableLabel.innerText = 'Portable';
  rowForm.appendChild(portableLabel);
  //   portable input
  const portable = document.createElement('input');
  portable.id = 'portable';
  portable.required = true;
  portable.name = 'portable';
  portable.type = 'tel';
  console.log('telephone pattern? ');
  //   <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
  rowForm.appendChild(portable);
  // fin de portable champ
  // ****BUTTON champ/range

  const btnContainer = document.createElement('div');
  btnContainer.className = `button`;
  btnContainer.className = 'form-row';
  form.appendChild(btnContainer);
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Valider';
  btnContainer.appendChild(btn);
  btn.onclick = () => {
    if (!nom.value) return (nom.placeholder = 'obligatoire');
    if (!prenom.value) return (prenom.placeholder = 'obligatoire');
    if (!portable.value) return (portable.placeholder = 'obligatoire');
    btnOnClick([nom.value, prenom.value, portable.value, contacts, parentEl]);
    nom.value = prenom.value = portable.value = '';
  };

  parentEl.appendChild(form);
};

function btnOnClick(arr) {
  // const idGen = Math.floor(Math.random() * 100);
  const [nom, prenom, portable, contacts, parentEl] = arr;
  const contact = addContact({ nom, prenom, portable });
  // const id = `${idGen}` + Date.now();
  // for the db id dont send
  // const contact = { id, nom, prenom, portable };
  // contacts.push(contact);

  // sortContacts(contacts);
  return contact;
}
