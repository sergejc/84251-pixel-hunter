const render = (html) => {
  const template = document.createElement(`div`);
  template.innerHTML = html.trim();

  return template;
};

const parent = document.querySelector(`.central`);

const changeScreen = (element) => {
  parent.innerHTML = ``;
  parent.appendChild(element);
};

export {render, changeScreen};
