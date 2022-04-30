import { CardinalDirection } from "../Utils/Enums/CardinalDirection"

export interface ISunlight {
  display(): string
  getIntensity(): number
  getOrientation(): CardinalDirection
}