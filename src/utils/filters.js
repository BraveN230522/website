import moment from 'moment';

// expecting dates in ISO format e.g. 1606694400000
export const filterByDate = (from, to, events, key) => {
  if (!to && !from) {
    return events;
  }
  const start = moment(from);
  const end = moment(to);
  if (from && !to) {
    return events.filter(e => {
      const eventDate = moment(Number(e[key]));
      return eventDate.isSameOrAfter(start);
    });
  }
  if (to && !from) {
    return events.filter(e => {
      const eventDate = moment(Number(e[key]));
      return eventDate.isSameOrBefore(end);
    });
  }
  return events.filter(e => {
    const eventDate = moment(Number(e[key]));
    const res = eventDate.isSameOrAfter(start) && eventDate.isSameOrBefore(end);
    return res;
  });
};
