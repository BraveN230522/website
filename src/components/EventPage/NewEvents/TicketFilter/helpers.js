export const filterValidations = {
  minPrice: (filterValue, { price: { amount } }) => parseFloat(amount) >= filterValue,
  maxPrice: (filterValue, { price: { amount } }) => parseFloat(amount) <= filterValue,
  quantity: (value, { attributes: { splits } }) => {
    if (value === 'any') return true;

    if (!splits) return false;

    return splits.split(',').some(split => parseInt(split) === value);
  },
};

const sortLowComparison = (current, next) => {
  if (current > next) {
    return 1;
  }

  if (current < next) {
    return -1;
  }

  return 0;
};

const sortHighComparison = (current, next) => {
  if (current > next) {
    return 1;
  }

  if (current < next) {
    return -1;
  }

  return 0;
};

export const sortFilter = {
  'price-low': tickets => {
    return tickets.sort((current, next) =>
      sortLowComparison(parseFloat(current.price.amount), parseFloat(next.price.amount))
    );
  },
  'section-low': tickets => {
    return tickets.sort((current, next) =>
      sortLowComparison(parseFloat(current.attributes.section), parseFloat(next.attributes.section))
    );
  },
  'row-low': tickets => {
    return tickets.sort((current, next) =>
      sortLowComparison(parseFloat(current.attributes.row), parseFloat(next.attributes.row))
    );
  },
  'price-high': tickets => {
    return tickets.sort((current, next) =>
      sortHighComparison(parseFloat(current.price.amount), parseFloat(next.price.amount))
    );
  },
  'section-high': tickets => {
    return tickets.sort((current, next) =>
      sortHighComparison(parseFloat(current.attributes.section), parseFloat(next.attributes.section))
    );
  },
  'row-high': tickets => {
    return tickets.sort((current, next) =>
      sortHighComparison(parseFloat(current.attributes.row), parseFloat(next.attributes.row))
    );
  },
};

export const applyTicketFilter = (filter, ticket) => {
  return Object.keys(filter).every(key => {
    if (!filter[key] || !filterValidations[key]) return true;

    return filterValidations[key](filter[key], ticket);
  });
};
