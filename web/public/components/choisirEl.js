'use strict';

export const Div = (parentEl, arr, argum, text) => {
  const el = document.createElement('div');
  let [home, className] = argum.split(' ');
  const p = document.createElement('p');
  home === 'main'
    ? (p.innerHTML = text)
    : (p.innerHTML = `Vous avez ${arr.length} contacts`) &&
      (className = 'info');

  el.className = className;

  el.appendChild(p);
  parentEl.appendChild(el);
};
