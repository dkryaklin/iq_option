export const filterItems = (searchValue, items, maxAmount = 0) => {
  const searchQuery = searchValue && searchValue.toLowerCase();
  const results = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i] && items[i].toLowerCase();

    if (!searchQuery || (searchQuery && item && item.indexOf(searchQuery) === 0)) {
      results.push(items[i]);
    }

    if (results.length >= maxAmount && maxAmount !== 0) {
      break;
    }
  }

  results.sort((itemA, itemB) => {
    const a = itemA.toLowerCase();
    const b = itemB.toLowerCase();

    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  });

  return results;
};
