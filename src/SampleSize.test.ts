import { describe, it, expect } from 'vitest'

import Confidence from './enums/Confidence';
import SampleSize from './SampleSize';

describe('SampleSize', () => {
  it('should return the correct result', () => {
    const result = SampleSize.calculate({
      population: 3000,
      confidence: Confidence['90%'],
      errorMargin: 0.05,
    })

    expect(result).toEqual(250)
  })
})
