const getStyle = (grade) => {
  if (grade >= 85) return 'primary'

  if (grade >= 70) return

  return 'danger'
}

module.exports = getStyle
