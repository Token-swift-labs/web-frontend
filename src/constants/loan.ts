const interestRate = 0.16;
const timeRange = {
  min: 7,
  max: 60,
};

const currentDate = new Date();
const minDate = new Date();
minDate.setDate(currentDate.getDate() + timeRange.min); // 7 days in the future
const maxDate = new Date();
maxDate.setDate(currentDate.getDate() + timeRange.max); // 60 days in the future

export { interestRate, timeRange, minDate, maxDate };
