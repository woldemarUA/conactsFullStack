'use strict';

// const apiPath = 'http://localhost:3001/contacts'; fjj
const apiPath = '/api/contacts';

export async function getUsers() {
  try {
    // Requête fetch pour récupérer les données depuis le fichier quiz.json
    const response = await fetch(apiPath);
    // Conversion des données en format JSON
    const data = await response.json();

    return data;
  } catch (err) {
    // Gestion des erreurs en cas d'échec de la requête
    return console.log(err);
  }
}

export const addContact = async (obj) => {
  try {
    const response = await fetch(apiPath, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (err) {
    console.log('Error occurred:', err);
  }
};
