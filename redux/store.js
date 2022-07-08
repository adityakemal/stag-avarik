import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./gallery/gallery.reducer";


export const store = configureStore({
    reducer: {
        gallery: galleryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});
