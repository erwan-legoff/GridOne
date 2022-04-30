import { CardinalDirection } from '../Utils/Enums/CardinalDirection'

export interface IWind {
  display(): string
  getDirection(): CardinalDirection
  getSpeed(): number
}
