import Confidence from './enums/Confidence';
import CalculateParams from './interfaces/CalculateParams';

export default class SampleSize {
  static confidences = Confidence

  static scores = new Map([
    [0.9, 1.65],
    [0.95, 1.96],
    [0.99, 2.58]
  ])

  static calculate(params: CalculateParams): number {
    const { population, confidence, errorMargin } = params;

    const escore = SampleSize.scores.get(confidence) ?? 0;
    const p = 0.5

    const numerator = (Math.pow(escore, 2) * p * (1 - p)) / Math.pow(errorMargin, 2)
    const denominator = 1 + ((Math.pow(escore, 2) * p * (1 - p)) / (Math.pow(errorMargin, 2) * population));
    const sampleSize = Math.ceil(numerator / denominator);

    return sampleSize;
  }
}
