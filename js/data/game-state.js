import LevelView1 from '../game_screens/game_1/screen';

const INITIAL_GAME = Object.freeze({
  level: 1,
  lives: 3,
  time: 30,
  stats: []
});

const ImageType = {
  PHOTO: `photo`,
  PAINT: `paint`
};

const Result = {
  NEXT: 1,
  DIE: 2,
  NOOP: 3
};

const GameSpeed = {
  SLOW: 20,
  FAST: 10
};

const ATTEMPTS_COUNT = 10;

const AnswerType = {
  FAST: `fast`,
  SLOW: `slow`,
  CORRECT: `correct`,
  WRONG: `wrong`,
  UNKNOWN: `unknown`
};

/**
 * фото или рисунок 1x1
 * фото или рисунок 1
 * рисунок среди изображений 1x1x1
 */
const levels = {
  'level-1': {
    view: (game, level) => new LevelView1(game, level),
    data: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        type: ImageType.PAINT
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        type: ImageType.PHOTO
      }]
  },
  'level-2': {
    view: (game, level) => new LevelView1(game, level),
    data: [
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        type: ImageType.PAINT
      }
    ]
  },
  'level-3': {
    view: (game, level) => new LevelView1(game, level),
    data: [
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        type: ImageType.PAINT
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        type: ImageType.PHOTO
      },
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        type: ImageType.PHOTO
      }
    ]
  },

  'level-4': {
    view: (game, level) => new LevelView1(game, level),
    data: [
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        type: ImageType.PAINT
      },
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        type: ImageType.PHOTO
      }
    ]
  },
  'level-5': {
    view: (game, level) => new LevelView1(game, level),
    data: [
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: ImageType.PHOTO
      }
    ]
  },
  'level-6': {
    view: (game, level) => new LevelView1(game, level),
    data: [
      {
        src: `https://k42.kn3.net/D2F0370D6.jpg`,
        type: ImageType.PAINT
      },
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        type: ImageType.PHOTO
      },
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: ImageType.PHOTO
      }
    ]
  },

  'level-7': {
    view: (game, level) => new LevelView1(game, level),
    data: [
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        type: ImageType.PHOTO
      },
      {
        src: `https://k42.kn3.net/CF42609C8.jpg`,
        type: ImageType.PAINT
      }
    ]
  },
  'level-8': {
    view: (game, level) => new LevelView1(game, level),
    data: [
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        type: ImageType.PHOTO
      }
    ]
  },
  'level-9': {
    view: (game, level) => new LevelView1(game, level),
    data: [
      {
        src: `http://i.imgur.com/1KegWPz.jpg`,
        type: ImageType.PAINT
      },
      {
        src: `http://i.imgur.com/DKR1HtB.jpg`,
        type: ImageType.PHOTO
      },
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: ImageType.PHOTO
      }
    ]
  },

  'level-10': {
    view: (game, level) => new LevelView1(game, level),
    data: [
      {
        src: `https://i.imgur.com/DiHM5Zb.jpg`,
        type: ImageType.PHOTO
      },
      {
        src: `https://k32.kn3.net/5C7060EC5.jpg`,
        type: ImageType.PAINT
      }
    ]
  }
};

export {INITIAL_GAME, levels, Result, GameSpeed, AnswerType, ATTEMPTS_COUNT};
