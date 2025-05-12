import type CalculateParams from './interfaces/CalculateParams'
import Confidence from './enums/Confidence'

export default abstract class SampleSize {
  static readonly confidences = Confidence

  static readonly scores = new Map<Confidence, number>([
    [Confidence['90%'], 1.65],
    [Confidence['95%'], 1.96],
    [Confidence['99%'], 2.58],
  ])

  static calculate(params: CalculateParams): number {
    const { population, confidence, errorMargin } = params

    const escore = SampleSize.scores.get(confidence) ?? 0
    const p = 0.5

    const numerator = (escore ** 2 * p * (1 - p)) / errorMargin ** 2
    const denominator = 1 + ((escore ** 2 * p * (1 - p)) / (errorMargin ** 2 * population))
    const sampleSize = Math.ceil(numerator / denominator)

    return sampleSize
  }
}
