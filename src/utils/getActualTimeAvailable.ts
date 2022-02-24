const getActualTimeAvailable = (hours: number): number => {
    let daysToRemove = 0
    const nbOfDays = hours / 24
    if (nbOfDays >= 7) {
      daysToRemove = nbOfDays % 7
    }
    // daysToRemove * 2 to remove weekend
    const reducedNbOfDays = nbOfDays - daysToRemove * 2
    const hoursToWork = reducedNbOfDays * 24
    // Removing 16 hours per days => only working 8 hours a day
    const reducedHoursToWork = hoursToWork - reducedNbOfDays * 16
    return reducedHoursToWork
  }
  export default getActualTimeAvailable