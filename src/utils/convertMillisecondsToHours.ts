const convertMillisecondsToHours = (ms: number): number => {
  const hours = (ms / (1000 * 60 * 60)).toFixed(1)
  return parseInt(hours, 10)
}

export default convertMillisecondsToHours
