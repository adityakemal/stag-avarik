import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    quizActive: 0,
    QuestionQuiz: [
        { title: '0' },
        {
            title: 'quiz 1',
            answers: [
                { text: 'A, saya quiz1 ?', point: 30 },
                { text: 'B, saya quiz1 ?', point: 40 },
                { text: 'C, saya quiz1 ?', point: 50 },
            ]
        },
        {
            title: 'quiz 2',
            answers: [
                { text: 'A, saya quiz2 ?', point: 30 },
                { text: 'B, saya quiz2 ?', point: 40 },
                { text: 'C, saya quiz2 ?', point: 50 },
            ]
        },
        {
            title: 'quiz 3',
            answers: [
                { text: 'A, saya quiz3 ?', point: 30 },
                { text: 'B, saya quiz3 ?', point: 40 },
                { text: 'C, saya quiz3 ?', point: 50 },
            ]
        },
    ],
    answerData: []
};

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        getHandleNext: (state, { payload }) => {
            state.quizActive = state.quizActive + 1
        },
        getHandleBack: (state, { payload }) => {
            if (state.quizActive !== 0) {
                state.quizActive = state.quizActive - 1
            }
        },

        getHandleAnswer: (state, { payload }) => {
            state.answerData = [...state.answerData, payload]
        },


    },
});

// Action creators are generated for each case reducer function
export const { getHandleNext, getHandleBack, getHandleAnswer } = quizSlice.actions;

export default quizSlice.reducer;
