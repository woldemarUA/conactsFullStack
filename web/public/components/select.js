'sue strict';

export const SelectElement = (name, options, className) => {
  const container = document.createElement('div');
  container.className = className;
  const select = document.createElement('select');
  const defaultOption = document.createElement('option');
  defaultOption.setAttribute('selected', 'selected');
  defaultOption.value = '';
  defaultOption.innerText = 'Que voulez vous faire?';
  defaultOption.disabled = true;

  select.appendChild(defaultOption);
  container.appendChild(select);
  for (const [i, option] of options.entries()) {
    const opt = document.createElement('option');
    opt.id = `${name}-${i}`;
    opt.value = i;
    opt.innerText = option;
    select.appendChild(opt);
  }

  return select;
};
