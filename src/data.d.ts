export interface IData {
    id: string;
    lang: string;
    logo: string;
    questions: {
        question: string;
        answers: {
            answer: string;
            isCorrect: boolean;
        }[];
    }[];
}[]