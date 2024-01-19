'use strict';

import { contacts } from '../../../bd/bd_request.js';

const latinAlphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const sorted = [];
for (const i in latinAlphabet) sorted.push([]);
export const sortContacts = (arr) => {
  for (const contact of arr) {
    const { Nom } = contact;
    const index = latinAlphabet.indexOf(Nom[0].toUpperCase());

    sorted[index].push(contact);
  }
  console.log(sorted);
  const updated = [];
  for (const group of sorted) {
    if (group.length) {
      for (const contact of group) updated.push(contact);
    }
  }

  for (const i in contacts) contacts[i] = updated[i];
  console.log('references!!!!!');
};
