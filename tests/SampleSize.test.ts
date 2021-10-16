import Confidence from '../src/enums/Confidence';
import SampleSize from '../src/SampleSize';

describe('#SampleSize', () => {
  it('Should return the correct result', async () => {
    const result = SampleSize.calculate({
      population: 3000,
      confidence: Confidence['90%'],
      errorMargin: 0.05,
    })

    expect(result).toEqual(250)
  })
})
