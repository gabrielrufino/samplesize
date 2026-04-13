import { describe, expect, it } from 'vitest'

import Confidence from './enums/Confidence'
import SampleSize from './SampleSize'

describe(SampleSize.name, () => {
  it('should return the correct result for 90% confidence', () => {
    const result = SampleSize.calculate({
      population: 3000,
      confidence: Confidence['90%'],
      errorMargin: 0.05,
    })

    expect(result).toEqual(250)
  })

  it('should return the correct result for 95% confidence', () => {
    const result = SampleSize.calculate({
      population: 3000,
      confidence: Confidence['95%'],
      errorMargin: 0.05,
    })

    expect(result).toEqual(341)
  })

  it('should return the correct result for 99% confidence', () => {
    const result = SampleSize.calculate({
      population: 3000,
      confidence: Confidence['99%'],
      errorMargin: 0.05,
    })

    expect(result).toEqual(545)
  })

  it('should return 0 when confidence is not found', () => {
    const result = SampleSize.calculate({
      population: 3000,
      confidence: 'Unknown' as unknown as Confidence,
      errorMargin: 0.05,
    })

    expect(result).toEqual(0)
  })
})
