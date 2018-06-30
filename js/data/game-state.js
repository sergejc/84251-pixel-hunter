import {screen1, updateGame1} from '../game_screens/game_1/screen';
import {screen2, updateGame2} from '../game_screens/game_2/screen';
import {screen3, updateGame3} from '../game_screens/game_3/screen';

const INITIAL_GAME = Object.freeze({
  level: 1,
  lives: 3,
  time: 30,
  stats: []
});

const IMAGE_TYPE = {
  PHOTO: `photo`,
  PAINT: `paint`
};

/**
 * фото или рисунок 1x1
 * фото или рисунок 1
 * рисунок среди изображений 1x1x1
 */
const levels = {
  'level-1': {
    render: screen1,
    getState: updateGame1,
    data: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        type: IMAGE_TYPE.PAINT
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        type: IMAGE_TYPE.PHOTO
      }]
  },
  'level-2': {
    render: screen2,
    getState: updateGame2,
    data: [
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        type: IMAGE_TYPE.PAINT
      }
    ]
  },
  'level-3': {
    render: screen3,
    getState: updateGame3,
    data: [
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        type: IMAGE_TYPE.PAINT
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        type: IMAGE_TYPE.PHOTO
      },
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        type: IMAGE_TYPE.PHOTO
      }
    ]
  },

  'level-4': {
    render: screen1,
    getState: updateGame1,
    data: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        type: IMAGE_TYPE.PAINT
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        type: IMAGE_TYPE.PHOTO
      }
    ]
  },
  'level-5': {
    render: screen2,
    getState: updateGame2,
    data: [
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: IMAGE_TYPE.PHOTO
      }
    ]
  },
  'level-6': {
    render: screen3,
    getState: updateGame3,
    data: [
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        type: IMAGE_TYPE.PAINT
      },
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        type: IMAGE_TYPE.PHOTO
      },
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: IMAGE_TYPE.PHOTO
      }
    ]
  },

  'level-7': {
    render: screen1,
    getState: updateGame1,
    data: [
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        type: IMAGE_TYPE.PHOTO
      },
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        type: IMAGE_TYPE.PAINT
      }
    ]
  },
  'level-8': {
    render: screen2,
    getState: updateGame2,
    data: [
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        type: IMAGE_TYPE.PHOTO
      }
    ]
  },
  'level-9': {
    render: screen3,
    getState: updateGame3,
    data: [
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        type: IMAGE_TYPE.PAINT
      },
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        type: IMAGE_TYPE.PHOTO
      },
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: IMAGE_TYPE.PHOTO
      }
    ]
  },

  'level-10': {
    render: screen1,
    getState: updateGame1,
    data: [
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: IMAGE_TYPE.PHOTO
      },
      {
        src: `https://k32.kn3.net/5C7060EC5.jpg`,
        type: IMAGE_TYPE.PAINT
      }
    ]
  }
};

export {INITIAL_GAME, levels};
