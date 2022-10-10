const lightCandle = (id, nekrologs) => {
  let nekrologsList = [...nekrologs];
  nekrologsList[id].candle = !nekrologsList[id].candle;
  return nekrologsList
};

export default lightCandle;
