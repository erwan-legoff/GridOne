import { ICoordinates } from '../Worlds/ICoordinates'
import { IPlace } from '../Worlds/IPlace'

export interface IMap {
  display(): string

  getPlace(coordinates: ICoordinates): IPlace
  getPlaces(): IPlace[]
}
