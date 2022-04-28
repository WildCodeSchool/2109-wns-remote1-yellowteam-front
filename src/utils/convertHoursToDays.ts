const convertHoursToDays = (
  numberOfHours: number | undefined
): string | number => {
  if (!numberOfHours) return 0
  const Days = Math.floor(numberOfHours / 24)
  const Remainder = numberOfHours % 24
  const Hours = Math.floor(Remainder)
  return `${Days ? `${Days} days,` : ''} ${Hours} hours`
}

export default convertHoursToDays
