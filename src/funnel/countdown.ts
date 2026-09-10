export interface CountdownParts {
  hours: number
  minutes: number
  seconds: number
}

export function getCountdownParts(remainingMs: number): CountdownParts {
  const totalMs = Math.max(0, remainingMs)
  const totalSeconds = Math.floor(totalMs / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { hours, minutes, seconds }
}
