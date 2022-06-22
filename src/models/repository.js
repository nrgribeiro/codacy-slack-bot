const repository = {
  create: (item) => {
    return {
      name: item.repository.name,
      grade: item.grade,
      letter: item.gradeLetter,
      issues: item.issuesPercentage,
      complexity: item.complexFilesPercentage,
      duplication: item.duplicationPercentage,
      selectedBranch: item.repository.defaultBranch.name,
      coverage: item.coverage?.filesWithLowCoverage,
      lastUpdated: item.repository.lastUpdated,
    }
  },
}

module.exports = repository
