import { ISunlight } from './ISunlight'
import { ITemperature } from './ITemperature'
import { ITime } from './ITime'
import { IWind } from './IWind'

export interface IWeather {
  display(): string
  getTemperature(): ITemperature
  getWind(): IWind
  getSunlight(): ISunlight
  getHumidity(): number
  getPressure(): number
  getTime(): ITime
}
