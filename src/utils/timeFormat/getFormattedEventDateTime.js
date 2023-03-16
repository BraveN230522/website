import moment from 'moment';

const getValidDate = timestamp => {
  const date = moment(Number(timestamp));

  if (date.isValid()) {
    return date;
  }

  return moment(timestamp);
};

const getFormattedEventDateTime = timestamp => {
  if (!timestamp) {
    return null;
  }
  const date = getValidDate(timestamp);
  const formattedTime = date.format('hh:mm A');
  const formattedDate = date.format('dd DD MMM YYYY');
  return `${formattedTime}, ${formattedDate}`;
};

export default getFormattedEventDateTime;
