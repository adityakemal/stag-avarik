import React, { useCallback, useEffect, useState, useTransition } from "react"
import SearchInput, { createFilter } from 'react-search-input'
import SearchIcon from "@mui/icons-material/Search"
import { styled, alpha } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import { filterObj } from "./filter-helpers"
import { useDispatch, useSelector } from "react-redux"
import { getHandleSearch, getInitialData } from "redux/gallery/gallery.reducer"
import { InputAdornment, TextField } from "@material-ui/core"

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }))

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: 20,
//   backgroundColor: "white",
//   // marginLeft: 0,
//   marginBottom: 6,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     // marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }))
// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }))


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


