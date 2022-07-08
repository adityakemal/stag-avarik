import React from "react"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

export default function Tags({ selectedFilterArray = [], addFilter }) {
  const handleDelete = (item) => {
    // console.info("You clicked the delete icon.")

    const arrWithoutCurrentType = selectedFilterArray.filter(
      (k) => k?.trait_type !== trait_type
    )

    let arrayNonZero = null
    // const newArr = selectedFilterArray.filter(i => i !== item?.trait_value)
    let newArr = selectedFilterArray.filter((i) => {
      //straight return based on type because it's only 1
      if (i?.values?.length === 1) return i?.trait_type !== trait_type

      const values = i?.values?.filter((j) => j !== item?.trait_value)
      arrayNonZero = {
        ...i,
        values,
      }

      // bugs on return, so use finalArray instead
      return arrayNonZero
    })

    const finalArray = !arrayNonZero
      ? newArr
      : [...arrWithoutCurrentType, arrayNonZero]

    addFilter(finalArray)
  }

  return (
    <Stack
      direction="row"
      spacing={1}
      style={{ flexWrap: "wrap", justifyContent: "start" }}
    >
      {selectedFilterArray?.map((k, i) => {
        if (k?.values?.length > 1) {
          return k?.values?.map((l, j) => (
            <Chip
              onDelete={() => handleDelete(l)}
              label={l}
              style={{
                background: "#eee",
                color: "black",
                borderRadius: 4,
                marginBottom: 4,
              }}
            />
          ))
        } else {
          return (
            <Chip
              onDelete={() => handleDelete(k)}
              label={k.values[0]}
              style={{
                background: "#eee",
                color: "black",
                borderRadius: 4,
                marginBottom: 4,
              }}
            />
          )
        }
      })}
      <Chip
        label="Clear All"
        variant="outlined"
        onDelete={handleDelete}
        style={{ background: "aqua" }}
      />
    </Stack>
  )
}
