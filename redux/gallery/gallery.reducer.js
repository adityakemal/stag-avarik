import { createSlice } from "@reduxjs/toolkit";
var jsonQuery = require('json-query')
import nftDataJson from "../../public/nft-source/opensea_avarik.json"


let initialState = {
    initialGallery: [...nftDataJson],
    galleryList: [...nftDataJson],
    filterList: [],
    sortString: '',
    legendaryHeroes: []
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
            let filterToQueryString = (name) => {
                let filterByname = state?.filterList?.filter(res => res.trait_type === name)
                if (filterByname.length === 0) {
                    return
                }
                let arrToString = filterByname?.map(val => `${name}=${val.value}`).toString().replaceAll(',', ' | ')
                let finalString = `[*${arrToString}]`
                return finalString
            }

            const data = nftDataJson


            let allQueryString = state?.filterList.map(res => filterToQueryString(res?.trait_type)).toString().replaceAll(',', '')

            // console.log(allQueryString)
            var result = jsonQuery(allQueryString, { data: data }).value
            // console.log(result.map(res => res))
            state.galleryList = result
        },
        getHandleLegendHeroes: (state, { payload }) => {
            const data = state.initialGallery
            const knightArr = data.filter(res => res.Faction === payload && res.Subclass === 'Legendary Knight')
            const wizardArr = data.filter(res => res.Faction === payload && res.Subclass === 'Legendary Wizard')
            const marksmanArr = data.filter(res => res.Faction === payload && res.Subclass === 'Legendary Marksman')

            state.legendaryHeroes = [
                { type: 'knight', heroes: knightArr },
                { type: 'wizard', heroes: wizardArr },
                { type: 'marksman', heroes: marksmanArr },
            ]

        }

    },
});

// Action creators are generated for each case reducer function
export const { getInitialData, getHandleSortBy, handleFilterData, filterEngine, handleSortName, handleResetData, getHandleSearch, getHandleLegendHeroes } = gallerySlice.actions;

export default gallerySlice.reducer;
