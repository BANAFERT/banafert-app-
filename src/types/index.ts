export interface AnalysisResult {
  soilType: string;
  humidity: number;
  fertility: string;
  waterAmount: number;
  waterDelay: number;
  banafertDose: number;
  bagsCount: number;
  priceEstimate: number;
  advice: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
}

export interface TrainingSlot {
  id: string;
  trainingId: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  maxParticipants: number;
  registered: number;
  price: number;
}
