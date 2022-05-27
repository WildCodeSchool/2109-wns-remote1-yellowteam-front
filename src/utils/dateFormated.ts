import { DateTime } from 'luxon'

const dateFormated = (date: string) => {
  const startDate = DateTime.fromISO(date)
  const startDateFormated = startDate.setLocale('fr').toLocaleString()
  return startDateFormated
}

export default dateFormated
