interface questionType {
    id: number,
    question: string,
    answer1: string,
    answer2: string,
    answer3?: string,
    correctanswer: string,
    answeruser: null | string,
    leaveForLater: boolean,
}

export interface initialStateType {
    data: questionType[],
    status: null | string,
    error: null | string,
}

export interface btnTypes {
    id?: number | undefined
    text: string | null
    answerLater?: () => void
}

export interface typeForMain extends questionType {
addAnswerUser?: (content: { id: number; name: string, leaveForLater: boolean }) => void;
}

export default questionType;