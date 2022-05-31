import React, { useCallback, useEffect, useState, useTransition } from "react"
import SearchIcon from "@mui/icons-material/Search"
import { styled, alpha } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import { filterObj } from "./filter-helpers"

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: "white",
  // marginLeft: 0,
  marginBottom: 6,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(1),
    width: "auto",
  },
}))
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}))

export default function SearchBar({ startTransition, allArr = [], setAllArr }) {
  // 1. if filteredArr filled up, filter from here,
  // 2. else filter from all arr
  // const [search, setSearch] = useState("")
  // const [isPending, startTransition] = useTransition()

  const handleSearch = useCallback((e) => {
    if (!e.target.value) return
    e.preventDefault()

    startTransition(() => {
      const searchResult = filterObj(allArr, e.target.value)
      setAllArr(searchResult)
    })

    // const searchResult = filterObj(allArr, search)
    // setAllArr(searchResult)
  }, [])

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        // onChange={(e) => setSearch(e.target.value)}
        onChange={handleSearch}
        // onKeyPress={(event) => {
        //   if (event.key === "Enter") {
        //     handleSearch(search)
        //   }
        // }}
      />
    </Search>
  )
}


