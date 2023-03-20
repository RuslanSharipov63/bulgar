import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import db from '../db';
import questionType, { initialStateType } from '../types/Types';



const initialState: initialStateType = {
    data: db,
    status: null,
    error: null,
}

export const QuestionSlice = createSlice({
    name: '@question',
    initialState,
    reducers: {
        toggleleaveForLater(state, action: PayloadAction<number | undefined>) {
            state.data.map(item => {
                if (item.id === action.payload) {
                    item.leaveForLater = !item.leaveForLater;
                }
            })
        },
        newAnswer(state, action: PayloadAction<{ id: number, name: string }>) {
            state.data.find(item => {
                if (item.id === action.payload.id) {
                    item.answeruser = action.payload.name
                }
            })
        },

    },
})


export const { toggleleaveForLater, newAnswer, } = QuestionSlice.actions;

export default QuestionSlice.reducer