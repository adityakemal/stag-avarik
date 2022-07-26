import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./gallery/gallery.reducer";
import quizReducer from "./quiz/quiz.reducer";


export const store = configureStore({
    reducer: {
        gallery: galleryReducer,
        quiz: quizReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});
