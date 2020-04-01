export const convertToMonthDayFormat = dateTimeString => {
  const dateValues = new Date(dateTimeString.substr(0, 10))
    .toDateString()
    .split(' ');
  const day = dateValues[0];
  const month = dateValues[1];
  const date = dateValues[2];
  return `${day} ${month} ${date}`;
};
