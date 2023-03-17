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

    },
})


/* export const { } = QuestionSlice.actions */

export default QuestionSlice.reducer