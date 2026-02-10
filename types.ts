export interface Persona {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  icon: any;
}

export interface Service {
  title: string;
  description: string;
  points: string[];
  deployment: string;
}

export interface CaseStudy {
  clientType: string;
  problem: string;
  built: string;
  result: string;
  quote: string;
  author: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}