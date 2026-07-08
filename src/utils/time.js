export const minutesFromNow = (minutes) => {
  const res = new Date();
  res.setTime(res.getTime() + minutes * 60 * 1000);
  return res;
};
