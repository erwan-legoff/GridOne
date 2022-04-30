import { IGridObject } from '../GridObjects/IGridObject'
import { IWeather } from '../Weathers/IWeather'
import { ICoordinates } from './ICoordinates'

export interface IPlace {
  display(): string
  getCoordinates(): ICoordinates
  getWeather(): IWeather
  getGridObjects(): IGridObject[]
}
