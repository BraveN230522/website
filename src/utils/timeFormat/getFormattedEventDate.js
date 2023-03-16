import moment from 'moment';

const getValidDate = timestamp => {
  const date = moment(Number(timestamp));

  if (date.isValid()) {
    return date;
  }

  return moment(timestamp);
};

const getFormattedEventDate = timestamp => {
  if (!timestamp) {
    return null;
  }
  const date = getValidDate(timestamp);
  console.log('date', date);
  const formattedDate = date.format('dd DD MMM YYYY');
  return `${formattedDate}`;
};

export default getFormattedEventDate;
