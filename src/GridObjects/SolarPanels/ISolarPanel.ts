import { IWeather } from '../../Weathers/IWeather'
import { IGridObject } from '../IGridObject'

export class SimpleSolarPanel2D implements IGridObject {
  private efficiency
  private weatherHistory: IWeather[]

  constructor(efficiency: number, weather: IWeather) {
    this.efficiency = efficiency
    this.weatherHistory = [weather]
  }

  addToWeatherHistory(weather: IWeather) {
    this.weatherHistory.push(weather)
  }

  display(): string {
    return 'Solar Panel - OUTPUT: ' + this.getPowerOutput()
  }

  getPowerOutput(): number {
    const lastSunlightIntensity = this.weatherHistory[this.weatherHistory.length - 1].getSunlight().getIntensity()
    return lastSunlightIntensity * this.efficiency
  }
}
