'use strict';

import { Header } from './heading.js';
import { ImageContainer } from './logo.js';
import { SelectElement } from './select.js';
import { Div } from './choisirEl.js';
import { ContactsList } from './contactsList.js';
import { FormContact } from './ajoutForm.js';
import { getUsers } from '../functions/api_request.js';

let contacts = [];
const options = [
  'Lister les contacts',
  'Ajouter un contact',
  'Voir le numbre de contacts',
];

export const HomeScreen = async (parentEl, home) => {
  contacts = await getUsers();
  parentEl.innerHTML = '';
  const headerRow = document.createElement('div');
  headerRow.className = 'header-row';
  const logoRow = document.createElement('div');
  logoRow.className = 'logo-row';
  const menuRow = document.createElement('div');
  menuRow.className = 'menu-row';
  const infoRow = document.createElement('div');
  infoRow.className = 'info-row';
  const header = Header(3, 'header-main', 'Gestionnaire de contacts');
  const logo = ImageContainer('logo-center-bg', './img/logo.png');
  const menu = SelectElement('main-menu', options, 'main-menu');
  // const div = Div('container info', 'Choisir une option');

  menu.addEventListener('change', (e) => onChangeSel(e, infoRow));
  headerRow.appendChild(header);
  logoRow.appendChild(logo);
  menuRow.appendChild(menu);
  // infoRow.appendChild(div);
  Div(infoRow, contacts, `${home} info`, 'Choisir une option');

  parentEl.appendChild(headerRow);
  parentEl.appendChild(logoRow);
  parentEl.appendChild(menuRow);
  parentEl.appendChild(infoRow);
};

const changeFunctions = new Map([
  ['0', ContactsList],
  ['1', FormContact],
  ['2', Div],
]);

function onChangeSel(e, el) {
  const choice = e.target.value;

  el.innerHTML = '';
  changeFunctions.get(choice)(el, contacts, 'info');
}
