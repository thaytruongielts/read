
export enum QuestionType {
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  GAP_FILLING = "GAP_FILLING",
  SHORT_ANSWER = "SHORT_ANSWER",
}

export interface Question {
  id: number;
  questionText: string;
  type: QuestionType;
  options?: string[];
  wordLimit?: number;
}

export interface CorrectAnswer {
  questionId: number;
  answer: string;
}

export interface Passage {
  id: number;
  title: string;
  text: string;
  questions: Question[];
  answers: CorrectAnswer[];
}
