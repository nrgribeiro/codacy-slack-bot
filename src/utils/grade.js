const getStyle = (grade) => {
  if (grade >= 85) return 'primary'

  if (grade < 70) return 'danger'

  return
}

module.exports = getStyle
