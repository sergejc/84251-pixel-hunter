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

export default getScore;
