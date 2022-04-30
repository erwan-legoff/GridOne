import { TemperatureUnit } from "../Utils/Enums/TemperatureUnit"

export interface ITemperature {
  display(): string
  getValue(): number
  getUnit(): TemperatureUnit
}