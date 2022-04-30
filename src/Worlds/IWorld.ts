import { IMap } from '../Maps/IMap'
import { IWeather } from '../Weathers/IWeather'

export interface IWorld {
  getName(): string
  getDescription(): string
  display(): string
  getWeather(): IWeather
  getMap(): IMap
}
