import renderIntro from '../page_elements/render-intro.js';

const initialState = Object.freeze({
  level: 1,
  lives: 3,
  time: 30,
  stats: []
});

const levels = [
  {
    title: ``,
    render: renderIntro,
    data: ``
  }
];

export {initialState, levels};
