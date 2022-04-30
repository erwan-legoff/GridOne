export interface ITime {
  display(): string
  getSeconds(): number
  getMinutes(): number
  getHours(): number
  getDay(): number
  getMonth(): number
  getYear(): number
  tick(): void
}