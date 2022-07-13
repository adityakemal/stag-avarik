import React, { useCallback, useEffect, useState, useTransition } from "react"
import SearchInput, { createFilter } from 'react-search-input'
import SearchIcon from "@mui/icons-material/Search"
import { styled, alpha } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import { filterObj } from "./filter-helpers"
import { useDispatch, useSelector } from "react-redux"
import { getHandleSearch, getInitialData } from "redux/gallery/gallery.reducer"
import { InputAdornment, TextField } from "@material-ui/core"



export default function SearchBar() {
  const { galleryList } = useSelector(state => state.gallery)
  const KEYS_TO_FILTERS = ['name', 'subject', 'dest.name']

  const dispatch = useDispatch()



  const [search, setSearch] = useState('')


  const handleChange = (v) => {
    if (v.length === 0) {
      dispatch(getInitialData())
    }
    setSearch(v)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getHandleSearch(search))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="wrap-search-custom d-flex w-100 bg-white border-circle border-0">
        <SearchIcon />
        <SearchInput className="search-input " onChange={handleChange} />
      </div>
    </form>
    // </Search>
  )
}


