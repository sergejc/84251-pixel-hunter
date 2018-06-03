const getElementFromTemplate = (html) => {
  const template = document.createElement(`div`);
  template.innerHTML = html.trim();

  return template;
};

const parent = document.querySelector(`.central`);

const render = (element) => {
  parent.innerHTML = ``;
  parent.appendChild(element);
};

export {getElementFromTemplate, render};
