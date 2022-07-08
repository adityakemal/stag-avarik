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
import TRAITS from "./filter-helpers"
import Image from "next/image"
import { useSelector } from "react-redux"
import { resolveHref } from "next/dist/shared/lib/router/router"

// {"image":"ipfs://QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ","attributes":[{"trait_type":"Earring","value":"Silver Hoop"},{"trait_type":"Background","value":"Orange"},{"trait_type":"Fur","value":"Robot"},

export default function Drawer({
  filteredArray = [],
  // selectedFilterArray = [],
  addFilter = () => { },
}) {
  const { filterList } = useSelector(state => state.gallery)

  var selectedFilterArray = filterList
  return (
    <div className="col-12 col-md-4 d-none d-md-block p-0">
      <div className="text-white box-drawer">
        <div style={{ paddingBottom: 20 }}>
          <Image
            src={`/assets/traits/classification.svg`}
            width={332}
            height={43}
            objectFit={`contain`}
          />
          {TRAITS.slice(0, 3).map(({ trait_type, options, total, icon }, i) => {
            return (
              <TraitType
                key={i}
                {...{
                  trait_type,
                  total,
                  options,
                  selectedFilterArray,
                  addFilter,
                  filteredArray,
                  icon,
                }}
              />
            )
          })}
          <Image
            src={`/assets/traits/appearance.svg`}
            width={332}
            height={43}
            objectFit={`contain`}
          />
          {TRAITS.slice(3, 7).map(({ trait_type, options, total, icon }, i) => {
            return (
              <TraitType
                key={i}
                {...{
                  trait_type,
                  total,
                  options,
                  selectedFilterArray,
                  addFilter,
                  filteredArray,
                  icon,
                }}
              />
            )
          })}
          <Image
            src={`/assets/traits/equipment.svg`}
            width={332}
            height={43}
            objectFit={`contain`}
          />
          {TRAITS.slice(7, 11).map(
            ({ trait_type, options, total, icon }, i) => {
              return (
                <TraitType
                  key={i}
                  {...{
                    trait_type,
                    total,
                    options,
                    selectedFilterArray,
                    addFilter,
                    filteredArray,
                    icon,
                  }}
                />
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}

// MuiButtonBase-root MuiAccordionSummary-root
// Mui-expanded MuiAccordionSummary-gutters
// css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root
const TraitType = ({
  trait_type,
  options,
  selectedFilterArray = [],
  addFilter,
  total,
  filteredArray,
  icon,
}) => {
  return (
    <>
      <Accordion
        style={{
          overflowY: "scroll",
          // background: "#eee",
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='my-0'
          style={{
            backgroundImage: `url(./assets/AccordionItem.svg)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingRight: 30,
            paddingLeft: 25,

          }}
        >
          <div className="d-inline-flex justify-content-between align-items-center" >
            <Image width={20} height={20} src={icon} />
            <h6 className="title ml-2 mt-2">
              {trait_type} ({total})
            </h6>
          </div>
        </AccordionSummary>
        <AccordionDetails
          style={{
            background: "#423B38",
            overflowY: "scroll",
            // display: "inline-flex",
            flexDirection: "column",
          }}
        >
          {options.map((item, i) => {
            const checkValue = (obj) => item?.trait_value?.includes(obj.value)
            const isExisted = filteredArray.find((o) =>
              o?.traits?.some(checkValue)
            )

            return isExisted ? (
              <ValueTrait
                key={i}
                {...{
                  item,
                  trait_type,
                  selectedFilterArray,
                  addFilter,
                }}
              />
            ) : null
          })}
        </AccordionDetails>
      </Accordion>
    </>
  )
}

const ValueTrait = ({
  item,
  trait_type,
  selectedFilterArray = [],
  addFilter,
}) => {

  const { filterList } = useSelector(state => state.gallery)

  const handleClick = () => {
    const isExist = filterList.some((e) => e.trait_type === trait_type && e.value === item?.trait_value)
    console.log(isExist, 'is Exisgt')
    if (isExist) {

      const filtered = filterList.filter(res => res.value !== item?.trait_value)
      // console.log(filtered, 'filter')
      addFilter(filtered)
    } else {
      const data = {
        trait_type: trait_type,
        value: item?.trait_value
      }
      console.log('noncheck')
      addFilter([
        ...filterList,
        data
      ])

    }
  }

  return (
    <ListItem disablePadding>
      <ListItemButton role={undefined} onClick={handleClick} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={
              // selectedFilterArray.includes(item?.trait_value)
              filterList.some((e) => e.trait_type === trait_type && e.value === item?.trait_value)
            }
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": `labelId` }}
            style={{ filter: `invert(1)` }}
          />
        </ListItemIcon>
        <ListItemText
          style={{ color: "white" }}
          id={`labelId`}
          primary={`${item?.trait_value} (${item?.total})`}
        />
      </ListItemButton>
    </ListItem>
  )
}
