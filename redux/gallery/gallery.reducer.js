import { createSlice } from "@reduxjs/toolkit";
var jsonQuery = require('json-query')
import { shuffleArray } from "components/pages/gallery/filter-helpers";
// import { dataAvarikHeroes } from "public/nft-source/opensea_avarik";
import nftDataJson from "../../public/nft-source/opensea_avarik_stats.json"



// const flatted = dataAvarikHeroes.map(d => {

//     for (const t of d.traits) {
//         d[t.trait_type] = t.value
//     }
//     return d
// })

let initialState = {
    initialGallery: [...nftDataJson],
    galleryList: [...nftDataJson],
    filterList: [],
    sortString: '',
};

export const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        getInitialData: (state, { payload }) => {
            // console.log(nftDataJson)
            state.galleryList = nftDataJson
            // state.galleryList = nftDataJson.slice(0, 10)
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
            // alert(payload.data)
            const data = state.galleryList.sort((a, b) => a.name.localeCompare(b.name))
            state.galleryList = data
        },
        getHandleSortBy: (state, { payload }) => {
            // alert(payload)
            if (payload === 'name') {
                const data = state.galleryList.sort((a, b) => a.name.localeCompare(b.name))
                state.galleryList = data
                state.sortString = payload
            }
            if (payload === 'id') {
                const data = state.galleryList.sort((a, b) => parseInt(a.id) - parseInt(b.id))
                state.galleryList = data
                state.sortString = payload
            }

            // const data = state.galleryList.sort((a, b) => a.name.localeCompare(b.name))
            // state.galleryList = data
        },

        filterEngine: (state) => {
            // console.log(nftDataJson)

            // var data = {
            //     heroes: nftDataJson
            // }

            // const results = jsonQuery('heroes[**][*Subclass : Archer]', {
            //     data: data
            // }).value


            // console.log(results)




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
export const { getInitialData, getHandleSortBy, handleFilterData, filterEngine, handleSortName, handleResetData, getHandleSearch } = gallerySlice.actions;

export default gallerySlice.reducer;
