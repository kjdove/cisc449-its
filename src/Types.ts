export interface MCQ {
    id: string;
    question: string;
}

export interface CodingQ {
    id: string;
    question: string;
}

export interface mcAnswer {
    id: string;
    options: {textId: string; text: string}[];
    correctId: string;
}