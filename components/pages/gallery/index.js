import * as React from "react"
// import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteScroll from "react-infinite-scroller"
import Drawer from "./Drawer"
import Image from "next/image"
import avarikMetadata from "components/utils/opensea_avarik_stats.json"
import Modal from "@mui/material/Modal"
import Skeleton from "@mui/material/Skeleton"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { getPercentageMeta } from "./filter"

const allArrx = avarikMetadata

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export default function App() {
  const [_options, addFilter] = React.useState([
    // {
    //     "trait_type": "Background",
    //     "values": ["Glacian IV", "Ignisian IV"]
    // },
    // {
    //     "trait_type": "Subclass",
    //     "values": ["Archer"]
    // },
  ])

  // "traits": [
  //     {
  //         "trait_type": "Faction",
  //         "value": "Glacia"
  //     },

  const allArr = React.useMemo(() => shuffleArray(allArrx), [])
  // const allArr = React.useMemo(() => avarikMetadata, [])
  const [range, setRange] = React.useState(9)

  const goNext = () => {
    setTimeout(() => {
      setRange(range + 9 * 2)
    }, 3)
  }

  const usedArr = () => {
    const A = allArr

    if (!_options.length) return A

    let B = []

    _options.map((o) => {
      // console.log(A.filter(item => item?.traits?.some(checkValue)))
      // const checkValue = obj => obj.value === o?.trait_type;
      const checkValue = (obj) => o?.values?.includes(obj.value)
      const X = !!B.length ? B : A

      B = X.filter((item) => item?.traits?.some(checkValue))
    })
    return B
  }

  const [open, setOpen] = React.useState(false)
  const [currentItem, setCurrentItem] = React.useState(null)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        // background: "#eee",
        display: "inline-flex",
        padding: "5%",
      }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            // background: "#eee",
            // height: "50%",
            width: "50%",
            padding: "3%",
          }}
        >
          <div
            className=""
            style={{ display: "inline-flex", justifyContent: "space-between" }}
          >
            <div className="">
              {!!currentItem && (
                <div>
                  ID: {currentItem?.id}
                  <br />
                  Name: {currentItem?.name}
                  <br />
                  Description: {currentItem?.description}
                </div>
              )}
            </div>
            <img src={currentItem?.image} style={{ width: 100, height: 100 }} />
          </div>

          <hr />
          <div className="row">
            <div className="col">
              {!!currentItem &&
                currentItem?.traits?.map((_item, i) => (
                  <div>
                    {_item?.trait_type} : {_item?.value} (
                    {getPercentageMeta(_item?.trait_type, _item?.value)}%)
                  </div>
                ))}
            </div>
            <div className="col">
              {!!currentItem &&
                [
                  "HP",
                  "ATK",
                  "DEF",
                  "SUM Stat",
                  "Counter Rate",
                  "Evasion",
                  "Accuracy",
                  "Critical Rate",
                  "Critical Damage",
                  "Multi Hit",
                  "Block Rate",
                  "Pierce Rate",
                ].map((L, iL) => (
                  <div>
                    {L}: {currentItem?.battle_stats[L]}
                    {iL > 3 ? "%" : ""}
                  </div>
                ))}
            </div>
          </div>

          <br />
          {!!currentItem && (
            //
            <a
              style={{ color: "blue" }}
              href={`https://opensea.io/assets/0x127e479ac59a1ea76afdedf830fecc2909aa4cae/${currentItem?.id}`}
            >
              opensea
            </a>
          )}
        </div>
      </Modal>

      {/* <img src={`./logo.png`} style={{ width: 200, height: 300 }} /> */}
      <div
        className=""
        style={{
          width: "30%",
          // background: "#eee",
        }}
      ></div>
      <div
        className="text-white"
        style={{
          height: "80vh",
          width: "30%",
          // background: "#eee",
          position: "fixed",
          zIndex: 200,
          marginTop: "3%",
          paddingRight: "3%",
          marginBottom: "3%",
          overflowY: "scroll",
        }}
      >
        {usedArr().length} items
        {/* <br />
        <Tags
          {...{
            selectedFilterArray: _options,
            addFilter,
          }}
        /> */}
        {/* Test */}
        <Drawer
          {...{
            selectedFilterArray: _options,
            addFilter,
          }}
        />
      </div>

      <div
        className=""
        style={{
          width: "70%",
          // background: "#eee",
          padding: "3%",
          height: `100%`,
          minHeight: "90vh",
          marginBottom: "10%",
        }}
      >
        <InfiniteScroll
          pageStart={0}
          loadMore={goNext}
          hasMore={true || false}
          // loader={<div>loading...</div>}
        >
          <div
            className=""
            style={{ height: `100%`, display: "inline-flex", flexWrap: "wrap" }}
          >
            {usedArr()
              .slice(0, range)
              .map((item, i) => (
                <div
                  className="transition"
                  onClick={() => {
                    //
                    setCurrentItem(item)
                    handleOpen(true)
                    // window.open(
                    //   `https://opensea.io/assets/0x127e479ac59a1ea76afdedf830fecc2909aa4cae/${item?.id}`
                    // )
                  }}
                  key={item?.id}
                  style={{
                    // width: 250, height: 250,
                    margin: 6,
                    cursor: "pointer",
                  }}
                >
                  <LoadImage
                    imgSrc={item?.image}
                    // imgSrc={item?.image_preview}
                    alt={item?.name}
                  />
                  <br />
                  <span style={{ color: "orange", textAlign: "center" }}>
                    {" "}
                    {item?.id}
                  </span>
                </div>
              ))}
            {[1, 1, 1].map((item) => {
              return (
                <Skeleton
                  variant="rectangular"
                  width={250}
                  height={250}
                  style={{ margin: 6 }}
                />
              )
            })}
          </div>
        </InfiniteScroll>
        <style jsx>{`
          .transition {
            transition-duration: 0.3s;
            -webkit-animation: fadeIn 1s ease-in-out;
          }
        `}</style>
      </div>
    </div>
  )
}

//filter
const Tags = ({ selectedFilterArray = [], addFilter }) => {
  const handleDelete = (item) => {
    console.info("You clicked the delete icon.")
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
    <Stack direction="row" spacing={1}>
      {selectedFilterArray?.map((k, i) => {
        return <Chip onDelete={() => handleDelete(k)} />
      })}
      <Chip label="Deletable" onDelete={handleDelete} />
      <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
    </Stack>
  )
}
const placeholder = "./icons/apple-icon.png"
const LoadImage = ({ imgSrc = "", alt = "" }) => {
  // const [state, setState] = React.useState(imgSrc)
  const [isError, setError] = React.useState(false)
  const [loaded, setLoaded] = React.useState(false)
  return (
    <>
      {isError && <div style={{ position: "absolute" }}>{} </div>}
      <Image
        // lazyBoundary=""
        placeholder="blur"
        blurDataURL="./icons/apple-icon.png"
        width="250"
        height="250"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null // prevents looping
          currentTarget.src = placeholder
          setError(true)
        }}
        onLoad={() => setLoaded(true)}
        // src={loaded ? imgSrc || placeholder : placeholder}
        src={imgSrc}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          border: `1px solid #eee`,
          // background: loaded ? "#eee" : "transparent",
          background: "gray",
          // opacity: loaded ? 1 : 0,
          cursor: "pointer",
        }}
      />
      {!loaded && (
        <Skeleton
          style={{ position: "absolute" }}
          variant="rectangular"
          width={250}
          height={250}
        />
      )}
    </>
  )
}

// https://opensea.mypinata.cloud/ipfs/Qme52CPg96v3JQCyD7tMoRcEdaAY9LrTi2YyBVowocgX8T/avarik-saga_0838.jpg
// https://ipfs.io/ipfs/Qme52CPg96v3JQCyD7tMoRcEdaAY9LrTi2YyBVowocgX8T/avarik-saga_0832.jpg
