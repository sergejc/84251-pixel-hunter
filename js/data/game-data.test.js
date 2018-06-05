import {assert, expect} from 'chai';

const calculateReward = (timeSpend) => {
  let reward = 0;
  if (timeSpend < 10) {
    reward = 50;
  } else if (timeSpend > 20) {
    reward = -50;
  }

  return reward;
};

const getScore = (answers, lifeCounter) => {
  if (answers.length < 10) {
    return -1;
  }

  return answers.reduce((acc, current) => {
    if (!current[0]) {
      return acc;
    }

    const rightAnswerScore = 100;

    return rightAnswerScore + calculateReward(current[1]) + acc;
  }, lifeCounter * 50);
};

describe(`Pixel hunter`, () => {
  describe(`getScore funtionality`, () => {

    it(`should return -1 when the player gave 0 right answers`, () => {
      assert(getScore([], 5), -1);
    });

    it(`should return -1 when the player gave only 9 answers`, () => {
      const answers = [
        [true, 15], [true, 30], [true, 10],
        [true, 5], [false, 5], [false, 29],
        [false, 25], [true, 10], [true, 20]
      ];
      expect(getScore(answers, 5)).to.equal(-1);
    });

    it(`should return 150 when the player gave only 1 right answer, extra life left = 1, fast answers = 0, slow answer = 0`, () => {
      const answers = [
        [true, 15], [false, 30], [false, 10],
        [false, 5], [false, 5], [false, 29],
        [false, 25], [false, 10], [false, 20],
        [false, 25]
      ];
      expect(getScore(answers, 1)).to.be.equal(150);
    });

    it(`should return 300 when the player gave only 3 right answers, extra life left = 0, fast answers = 0, slow answer = 0`, () => {
      const answers = [
        [true, 15], [false, 30], [false, 10],
        [false, 5], [true, 15], [false, 29],
        [true, 13], [false, 10], [false, 20],
        [false, 25]
      ];
      expect(getScore(answers, 0)).to.be.equal(300);
    });

    it(`should return 300 when the player gave 2 right answers, extra life left = 2, fast answers = 1, slow answer = 1`, () => {
      const answers = [
        [true, 9], [false, 30], [false, 10],
        [false, 5], [true, 25], [false, 29],
        [false, 13], [false, 10], [false, 20],
        [false, 25]
      ];
      assert(getScore(answers, 2), 300);
    });

    it(`should return 150 when the player gave 1 right answers, extra life left = 0, fast answers = 1, slow answer = 0`, () => {
      const answers = [
        [true, 9], [false, 30], [false, 10],
        [false, 5], [false, 25], [false, 29],
        [false, 13], [false, 10], [false, 20],
        [false, 25]
      ];
      assert(getScore(answers, 0), 150);
    });

    it(`should return 50 when the player gave 1 right answers, extra life left = 0, fast answers = 0, slow answer = 1`, () => {
      const answers = [
        [true, 20], [false, 30], [false, 10],
        [false, 5], [false, 25], [false, 29],
        [false, 13], [false, 10], [false, 20],
        [false, 25]
      ];
      assert(getScore(answers, 0), 150);
    });

    it(`should return 1150 when the player gave 10 right answers, extra life left = 3, fast answers = 0, slow answer = 0`, () => {
      const answers = [
        [true, 10], [true, 15], [true, 20],
        [true, 10], [true, 15], [true, 20],
        [true, 10], [true, 15], [true, 20],
        [true, 10]
      ];
      assert(getScore(answers, 3), 150);
    });
  });
});
