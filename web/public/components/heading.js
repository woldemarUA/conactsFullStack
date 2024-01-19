'use strict';

export const Header = (size, className, text) => {
  const header = document.createElement(`h${size}`);
  header.className = className;
  header.innerHTML = text;
  return header;
};
