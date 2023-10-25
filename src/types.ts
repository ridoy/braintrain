export type Set = {
    id: number,
    name: string,
    questions: Question[]
}

export type Question = {
    prompt: string,
    correctAnswer: string
}
