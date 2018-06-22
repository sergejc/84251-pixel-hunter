const timer = (seconds) => {
  let sec = seconds < 0 ? 0 : seconds;
  return {
    tick() {
      if (sec === 0) {
        return true;
      }
      sec--;
      return false;
    }
  };
};

export default timer;
