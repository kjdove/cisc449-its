export interface MCQ {
    id: string;
    question: string;
}

export interface CodingQ {
    id: string;
    question: string;
}

export interface Option {
    textId: string;
    text: string;
}

export interface mcAnswer {
    id: string;
    options: Option[];
    correctId: string;
}

export interface mcFeedback {
    id: string;
    options: Option[];
}

export interface CodingAnswerBase {
    id: string;
}

export interface FillBlankAnswer extends CodingAnswerBase {
    correctAnswers: string[];
}

export interface CodingMCAnswer extends CodingAnswerBase {
    options: Option[];
    correctId: string;
}

export interface OrderingAnswer extends CodingAnswerBase {
    correctOrder: string[];
    options: string[]; 
}

export type CodingAnswer =
  | { type: "fib"; id: string; correctAnswers: string| string[] }
  | { type: "ordering"; id: string; correctOrder: string | string[]; options: string[] }
  | { type: "mcq"; id: string; options: Option[]; correctId: string };
