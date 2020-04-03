export const convertToMonthDayFormat = dateTimeString => {
  const dateObj = new Date(dateTimeString.substr(0, 10));

  const day = DAY_ENUM[dateObj.getUTCDate()];
  const month = MONTH_ENUM[dateObj.getUTCMonth()];
  const date = dateObj.getUTCDate();
  return `${day} ${month} ${date}`;
};

const DAY_ENUM = {
  0: 'Mon',
  1: 'Tues',
  2: 'Wed',
  3: 'Thurs',
  4: 'Fri',
  5: 'Sat',
  6: 'Sun',
};

const MONTH_ENUM = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};
