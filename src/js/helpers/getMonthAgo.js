const getMonthAgo = () => {
  const date = new Date();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  const fullDate = `${year}-${month < 10 ? `0${month}` : month}-${day}`;

  return fullDate;
};

export default getMonthAgo;
