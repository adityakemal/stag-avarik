import * as React from "react"
// import InfiniteScroll from "react-infinite-scroll-component";

import InfiniteScroll from "react-infinite-scroller"
import Drawer from "./Drawer"

import avarik1000 from "./data_1/data1000.json"
import avarik2000 from "./data_1/data2000.json"
import avarik3000 from "./data_1/data3000.json"
import avarik4000 from "./data_1/data4000.json"
import avarik5000 from "./data_1/data5000.json"
import avarik6000 from "./data_1/data6000.json"
import avarik7000 from "./data_1/data7000.json"
import avarik8000 from "./data_1/data8000.json"
import avarik8888 from "./data_1/data8888.json"

import dataerror1000_b from "./data_1/dataerror1000_b.json"
import dataerror2000_b from "./data_1/dataerror2000_b.json"
import dataerror2000_c from "./data_1/dataerror2000_c.json"
import dataerror3000_b from "./data_1/dataerror3000_b.json"
import dataerror3000_c from "./data_1/dataerror3000_c.json"

import dataerror4000_b from "./data_1/dataerror4000_b.json"
import dataerror4000_c from "./data_1/dataerror4000_c.json"
import dataerror5000_b from "./data_1/dataerror5000_b.json"
import dataerror5000_c from "./data_1/dataerror5000_c.json"
import dataerror6000_b from "./data_1/dataerror6000_b.json"
import dataerror7000_b from "./data_1/dataerror7000_b.json"
import dataerror8000_b from "./data_1/dataerror8000_b.json"
import dataerror8888_b from "./data_1/dataerror8888_b.json"

import Skeleton from "@mui/material/Skeleton"
const allArrx = [
  ...avarik1000,
  ...avarik2000,
  ...avarik3000,
  ...avarik4000,
  ...avarik5000,
  ...avarik6000,
  ...avarik7000,
  ...avarik8000,
  ...avarik8888,
  //
  ...dataerror1000_b,
  ...dataerror2000_b,
  ...dataerror2000_c,
  ...dataerror3000_b,
  ...dataerror3000_c,
  ...dataerror4000_b,
  ...dataerror4000_c,
  ...dataerror5000_b,

  ...dataerror5000_c,
  ...dataerror6000_b,
  ...dataerror7000_b,
  ...dataerror8000_b,
  ...dataerror8888_b,
]

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const replaceIpfsOrigin = (url) =>
  // url.replace("ipfs://", " https://ipfs/ipfs/");
  url.replace("ipfs://", " https://opensea.mypinata.cloud/ipfs/")

export default function App() {
  console.log(allArrx.length)

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
  const [range, setRange] = React.useState(9)

  const goNext = () => {
    setTimeout(() => {
      setRange(range + 9)
    }, 700)
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

  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        background: "#eee",
        display: "inline-flex",
        padding: "5%",
      }}
    >
      {/* <img src={`./logo.png`} style={{ width: 200, height: 300 }} /> */}
      <div className="" style={{ width: "30%", background: "#eee" }}></div>
      <div
        className=""
        style={{
          height: "80vh",

          width: "30%",
          background: "#eee",
          position: "fixed",
          zIndex: 200,
          marginTop: "3%",
          paddingRight: "3%",
          marginBottom: "3%",
          overflowY: "scroll",
        }}
      >
        {usedArr().length} items
        <br />
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
          background: "#eee",
          padding: "3%",
          height: `100%`,
        }}
      >
        <InfiniteScroll
          pageStart={0}
          loadMore={goNext}
          hasMore={true || false}
          loader={null}
        >
          <div
            className=""
            style={{ height: `100%`, display: "inline-flex", flexWrap: "wrap" }}
          >
            {usedArr()
              .slice(0, range)
              .map((item, i) => (
                <div
                  onClick={() => {
                    window.open(
                      `https://opensea.io/assets/0x127e479ac59a1ea76afdedf830fecc2909aa4cae/${item?.id}`
                    )
                  }}
                  key={item?.id}
                  style={{ width: 250, height: 250, margin: 6 }}
                >
                  <span style={{ color: "orange" }}> {item?.id}</span>
                  <LoadImage
                    imgSrc={replaceIpfsOrigin(item?.image)}
                    alt={item?.name}
                  />
                </div>
              ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
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
      <img
        onError={({ currentTarget }) => {
          currentTarget.onerror = null // prevents looping
          currentTarget.src = placeholder
          setError(true)
        }}
        onLoad={() => setLoaded(true)}
        src={loaded ? imgSrc || placeholder : placeholder}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          border: `1px solid #eee`,
          background: loaded ? "#eee" : "transparent",
          opacity: loaded ? 1 : 0,
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
