import * as React from "react"
import InfiniteScroll from "react-infinite-scroller"
import Drawer from "./Drawer"
import Image from "next/image"
import avarikMetadatax from "../../../public/nft-source/opensea_avarik_stats.json"
import Skeleton from "@mui/material/Skeleton"

import { getPercentageMeta, shuffleArray } from "./filter"
import ModalPic from "./modal"
import SearchBar from "./search"
import Tags from "./tags"

const avarikMetadata = shuffleArray(avarikMetadatax)

export default function App() {
  const [allArr, setAllArr] = React.useState(avarikMetadata)
  const [_options, addFilter] = React.useState([])
  const [range, setRange] = React.useState(9)
  const [isPending, startTransition] = React.useTransition()

  const goNext = () => {
    // setTimeout(() => {
    startTransition(() => {
      setRange(range + 9 * 2)
    })
    // }, 3)
  }
  // const goNext = React.useCallback(() => {
  //   setTimeout(() => {
  //     setRange(range + 9 * 2)
  //   }, 3),
  //     []
  // })
  // use isPending as loader image;

  const usedArr = React.useCallback(
    (A) => {
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
    },
    [_options]
  )

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
      <ModalPic {...{ open, handleClose, currentItem }} />
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
        <div className="d-inline-flex justify-content-between w-100 ">
          {usedArr(allArr).length} items
          <button onClick={() => addFilter([])}>RESET</button>
        </div>
        <SearchBar {...{ startTransition, allArr, setAllArr }} />
        {/* <Tags {...{ selectedFilterArray: _options, addFilter }} /> */}
        <Drawer
          {...{
            selectedFilterArray: _options,
            addFilter,
            filteredArray: usedArr(allArr),
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
          hasMore={true}
          // loader={<div>loading...</div>}
        >
          <div
            className=""
            style={{ height: `100%`, display: "inline-flex", flexWrap: "wrap" }}
          >
            {usedArr(allArr)
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

const placeholder = "./icons/apple-icon.png"
// https://opensea.mypinata.cloud/ipfs/Qme52CPg96v3JQCyD7tMoRcEdaAY9LrTi2YyBVowocgX8T/avarik-saga_0838.jpg
// https://ipfs.io/ipfs/Qme52CPg96v3JQCyD7tMoRcEdaAY9LrTi2YyBVowocgX8T/avarik-saga_0832.jpg

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
