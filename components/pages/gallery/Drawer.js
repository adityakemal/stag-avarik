import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Checkbox from "@mui/material/Checkbox"
import TRAITS from "./data_1/filter"

// {"image":"ipfs://QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ","attributes":[{"trait_type":"Earring","value":"Silver Hoop"},{"trait_type":"Background","value":"Orange"},{"trait_type":"Fur","value":"Robot"},

export default function Drawer({
  data = [],
  selectedFilterArray = ["Glacian III", "Marksman", "Male"],
  addFilter = () => {},
}) {
  return (
    <div style={{ paddingBottom: 20 }}>
      {TRAITS.map(({ trait_type, options }, i) => {
        return (
          <TraitType
            key={i}
            {...{
              trait_type,
              options,
              selectedFilterArray,
              addFilter,
            }}
          />
        )
      })}
    </div>
  )
}

const TraitType = ({
  trait_type,
  options,
  selectedFilterArray = [],
  addFilter,
}) => {
  return (
    <Accordion
      style={{
        overflowY: "scroll",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{trait_type}</Typography>
      </AccordionSummary>
      <AccordionDetails
        style={{
          overflowY: "scroll",
          display: "inline-flex",
          flexDirection: "column",
        }}
      >
        {options.map((item, i) => (
          <ValueTrait
            key={i}
            {...{
              item,
              trait_type,
              selectedFilterArray,
              addFilter,
            }}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

const ValueTrait = ({
  item,
  trait_type,
  selectedFilterArray = [],
  addFilter,
}) => {
  const isChecked = () => {
    // const checkType = obj => obj.trait_type === type;
    const checkValue = (obj) => obj.values?.includes(item?.trait_value)

    return selectedFilterArray.some(checkValue)
  }
  // console.log(isChecked())
  return (
    <ListItem disablePadding>
      <ListItemButton
        role={undefined}
        onClick={(e) => {
          const arrWithoutCurrentType = selectedFilterArray.filter(
            (k) => k?.trait_type !== trait_type
          )

          if (isChecked()) {
            /** REMOVE */

            let arrayNonZero = null
            // const newArr = selectedFilterArray.filter(i => i !== item?.trait_value)
            let newArr = selectedFilterArray.filter((i) => {
              // i =    {  "trait_type": "Background",   "values": ["Glacian IV", "Ignisian IV"]   },

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
          } else {
            //check typeExisted?
            const checkType = (obj) => obj.trait_type === trait_type

            if (selectedFilterArray?.some(checkType)) {
              const newArr = selectedFilterArray.find(
                (k) => k?.trait_type === trait_type
              )?.values

              // use prev property
              addFilter([
                ...arrWithoutCurrentType,
                {
                  trait_type,
                  values: [...newArr, item?.trait_value],
                },
              ])
            } else {
              //
              addFilter([
                ...selectedFilterArray,
                {
                  trait_type,
                  values: [item?.trait_value],
                },
              ])
            }
          }
        }}
        dense
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={
              // selectedFilterArray.includes(item?.trait_value)
              isChecked()
            }
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": `labelId` }}
          />
        </ListItemIcon>
        <ListItemText id={`labelId`} primary={item?.trait_value} />
      </ListItemButton>
    </ListItem>
  )
}
