 interface questionType {
    id: number,
    question: string,
    answer1: string,
    answer2: string,
    answer3?: string,
    correctanswer: string,
    answeruser: null | string,
}

export default questionType;