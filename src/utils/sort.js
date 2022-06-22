const sort = {
  numericByValue: (obj, key) => {
    return obj.sort((a, b) => a[key] - b[key])
  },
}

module.exports = sort
