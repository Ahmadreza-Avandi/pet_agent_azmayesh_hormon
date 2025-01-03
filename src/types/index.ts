export interface TestResult {
  name: string;
  value: string;
  unit: string;
}

export interface HormoneTest {
  name: string;
  defaultUnit: string;
  description: string;
}

export interface TestCategory {
  title: string;
  tests: HormoneTest[];
}

export interface AnimalData {
  animalType: string;
  age: number;
  weight: number;
  gender: string;
  symptoms: string;
  testResults: TestResult[];
}

export interface DiagnosisResponse {
  result: string;
  message: string;
}