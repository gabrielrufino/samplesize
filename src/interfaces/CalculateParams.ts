import Confidence from '../enums/Confidence';

interface CalculateParams {
  population: number;
  confidence: Confidence;
  errorMargin: number;
}

export default CalculateParams;
