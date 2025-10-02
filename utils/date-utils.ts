/**
 * Checks if the current date is within the Thingyan Festival period
 * Returns true before May 1st of the current year
 */
export function isThingyanFestivalTime(): boolean {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const mayFirst = new Date(year, 4, 1) // May is month 4 (0-indexed)

  // Return true if current date is before May 1st
  return currentDate < mayFirst
}
