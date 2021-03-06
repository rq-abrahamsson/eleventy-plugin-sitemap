"use strict";

const isPagination = require("./isPagination");

module.exports = (item) => {
  if (!isPagination(item)) {
    return [item];
  }

  return item.data.pagination.pages.map((page) => ({
    ...item,
    ...page,
  }));
};
