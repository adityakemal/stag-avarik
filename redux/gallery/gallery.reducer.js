import { createSlice } from "@reduxjs/toolkit";
import { shuffleArray } from "components/pages/gallery/filter-helpers";

import nftDataJson from "../../public/nft-source/opensea_avarik_stats.json"

let initialState = {
    galleryList: [...nftDataJson],
    filterList: [],
};

export const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        getInitialData: (state, { payload }) => {
            console.log(nftDataJson)
            state.galleryList = nftDataJson.slice(0, 10)
        },

        getHandleSearch: (state, { payload }) => {
            if (state.filterList.length !== 0) {
                state.filterList = []
            }
            state.galleryList = nftDataJson.filter(res => res.name.toLowerCase().includes(payload.toLowerCase()))
        },
        handleFilterData: (state, { payload }) => {
            state.filterList = payload
        },

        handleResetData: (state, { payload }) => {
            state.filterList = []
            state.galleryList = [...nftDataJson]
        },

        handleSortName: (state, { payload }) => {
            const data = state.galleryList.sort((a, b) => a.name.localeCompare(b.name))
            state.galleryList = data
        },

        filterEngine: (state) => {
            if (state.filterList.length !== 0) {

                let data = []
                for (var fil of state?.filterList) {
                    // console.log(JSON.stringify(fil))
                    const filtered = nftDataJson?.filter(res => res?.traits?.find(val => JSON.stringify(val) === JSON.stringify(fil)))
                    data.push(...filtered)
                }
                state.galleryList = data
            } else {
                state.galleryList = [...nftDataJson]
            }
        }

    },
});

// Action creators are generated for each case reducer function
export const { getInitialData, handleFilterData, filterEngine, handleSortName, handleResetData, getHandleSearch } = gallerySlice.actions;

export default gallerySlice.reducer;
