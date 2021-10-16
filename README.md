<p align="center">
  <img width="200px" src="./assets/logo.png">
  <h1 align="center">Sample Size</h1>
</p>

### Getting started

Install the package:

```bash
npm install @gabrielrufino/samplesize
```

Calculate the sample size:

```js
import SampleSize from '@gabrielrufino/samplesize'

const size = SampleSize.calculate({
  population: 3000,
  confidence: SampleSize.confidences['90%'],
  errorMargin: 0.05,
})

console.log(size) // 250
```

### License

UNLICENSED
