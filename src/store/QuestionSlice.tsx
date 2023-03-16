import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import db from '../db';
import questionType from '../types/Types';

const initialState: questionType[] = db;

export const QuestionSlice = createSlice({
    name: '@question',
    initialState,
    reducers: {

    },
})


export const { } = QuestionSlice.actions

export default QuestionSlice.reducer