import * as React from "react"
import InfiniteScroll from "react-infinite-scroller"
import Drawer from "./Drawer"
import Image from "next/image"
// import { Image } from "components/anti/image/image"
import avarikMetadatax from "../../../public/nft-source/opensea_avarik_stats.json"
import Skeleton from "@mui/material/Skeleton"

import { getPercentageMeta, shuffleArray } from "./filter-helpers"
import ModalPic from "./modal"
import SearchBar from "./search"
import Tags from "./tags"
import bgGallery from "assets/img/gallery/bg-gallery.png"
import filterTitle from "assets/img/gallery/filter-title.svg"
import { useInView } from "react-intersection-observer"
import { useDispatch, useSelector } from "react-redux"
import { filterEngine, getInitialData, handleFilterData, handleResetData, handleSortName } from "redux/gallery/gallery.reducer"

const avarikMetadata = shuffleArray(avarikMetadatax)

export default function App() {
  const dispatch = useDispatch()

  const { galleryList, filterList } = useSelector(state => state.gallery)


  const [allArr, setAllArr] = React.useState([])
  // const [_options, addFilter] = React.useState([])
  const [_options] = React.useState([])
  const [range, setRange] = React.useState(16)
  const [isPending, startTransition] = React.useTransition()

  React.useEffect(() => {
    startTransition(() => {
      setAllArr(galleryList)
    })
  }, [galleryList, filterList])


  React.useEffect(() => {
    dispatch(filterEngine())
  }, [filterList])


  const addFilter = (v) => dispatch(handleFilterData(v))

  const handleSortByName = () => dispatch(handleSortName())



  const [open, setOpen] = React.useState(false)
  const [currentItem, setCurrentItem] = React.useState(null)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  React.useEffect(() => {
    if (inView) {
      startTransition(() => {
        setRange(range + 8 * 2)
      })
    }
  }, [inView])


  //1200 width
  return (
    <div className="sc-gallery position-relative w-100 h-100 pb-5 mb-5">
      <ModalPic {...{ open, handleClose, currentItem }} />
      <Image
        className="bg-gallery"
        src={bgGallery}
        layout="fill"
      // style={{
      //   objectFit: "contain",
      //   position: "fixed",
      //   zIndex: `-1 !important`,
      //   border: `3px solid red`,
      // }}
      />

      <h1
        className="w-100 p-5 text-center text-white "
        style={{ paddingTop: 100, zIndex: 888 }}
      >
        Gallery
      </h1>
      {/* <pre>
        {JSON.stringify(filterList, null, 2)}
      </pre> */}

      <div className="container p-auto ">
        <div className="w-100 row  position-sticky zindex-sticky m-auto">
          <TopDrawer handleReset={() => dispatch(handleResetData())} />
          <LeftHeader {...{ startTransition, allArr, setAllArr, handleSortByName }}>
            {galleryList?.length} ITEMS
            {/* <button onClick={() => dispatch(getInitialData())}>test</button> */}

          </LeftHeader>
        </div>

        <div className="w-100 h-100 row ">
          <Drawer
            {...{
              selectedFilterArray: _options,
              addFilter,
              filteredArray: galleryList,
            }}
          />

          <div className="col-12 col-md-8 content-images ">
            <div className="d-inline-flex flex-wrap">
              {allArr.slice(0, range)
                .map((item, i) => (
                  <div
                    className="transition box-nft "
                    onClick={() => {
                      //
                      setCurrentItem(item)
                      handleOpen(true)
                      // window.open(
                      //   `https://opensea.io/assets/0x127e479ac59a1ea76afdedf830fecc2909aa4cae/${item?.id}`
                      // )
                    }}
                    key={item?.id}
                  >
                    <div className="img-wrapper">
                      <LoadImage
                        imgSrc={item?.image}
                        // imgSrc={item?.image_preview}
                        alt={item?.name}
                      />
                    </div>
                    <h6 className={`title text-white text-break `}>
                      {item?.name}
                    </h6>
                  </div>
                ))}
              <div className="row" ref={ref}>
                {[1, 1, 1, 1].map((item) => {
                  return (
                    <Skeleton
                      variant="rectangular"
                      width={175}
                      height={200}
                      style={{ margin: 6, background: `#423B38` }}
                    />
                  )
                })}
              </div>
            </div>
            <style jsx>{`
              .transition {
                transition-duration: 0.3s;
                -webkit-animation: fadeIn 1s ease-in-out;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  )
}

const placeholder = "./icons/apple-icon.png"
// https://opensea.mypinata.cloud/ipfs/Qme52CPg96v3JQCyD7tMoRcEdaAY9LrTi2YyBVowocgX8T/avarik-saga_0838.jpg
// https://ipfs.io/ipfs/Qme52CPg96v3JQCyD7tMoRcEdaAY9LrTi2YyBVowocgX8T/avarik-saga_0832.jpg

const TopDrawer = ({ handleReset }) => (
  <div className="col-12 col-md-4 p-0" style={{ paddingRight: "3%" }}>
    <div className="d-inline-flex p-0 justify-content-between w-100 position-relative filter-title-box ">
      <div className="position-relative " style={{ width: 230, height: 48 }}>
        <Image
          src={filterTitle}
          layout="fill"
          style={{
            objectFit: "contain",
            minWidth: 230,
            width: 230,
            height: 70,
          }}
        />
      </div>
      <button className="text-white border-0 bg-transparent " onClick={handleReset}>
        Reset
      </button>
    </div>
  </div>
)

const LeftHeader = ({ startTransition, allArr, setAllArr, children, handleSortByName }) => (
  <div className="col-12 col-md-8  header-content ">
    <div
      className="d-flex justify-content-between align-items-center w-100 "
      style={{ paddingLeft: 0 }}
    >
      <h5
        className="text-white title  border-0 bg-transparent m-0"
        style={{ marginTop: 14 }}
      >
        {children}
      </h5>
      <h6 className="text-white title  border-0 bg-transparent m-0 cursor-pointer" onClick={() => handleSortByName()}>
        Sort By Name
      </h6>
      {/* <pre>
        {JSON.stringify(allArr, null, 2)}
      </pre> */}
    </div>

    <br />
    <div
      style={{
        position: "sticky",
        // background: "white",
        borderRadius: 20,
        zIndex: 999,
      }}
    >
      <SearchBar {...{ startTransition, allArr, setAllArr }} />
    </div>
  </div>
)

const LoadImage = ({ imgSrc = "", alt = "" }) => {
  // const [state, setState] = React.useState(imgSrc)
  const [isError, setError] = React.useState(false)
  const [loaded, setLoaded] = React.useState(false)
  return (
    <>
      {isError && <div style={{ position: "absolute" }}>{ } </div>}
      <Image
        ratio="r-1-1"
        objectFit="cover"
        // lazyBoundary=""
        // layout="fill"
        placeholder="blur"
        blurDataURL="./icons/apple-icon.png"
        width={175}
        height={182}
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

          // objectFit: "cover",
          // border: `1px solid #eee`,
          // background: loaded ? "#eee" : "transparent",
          background: "gray",
          // opacity: loaded ? 1 : 0,
          cursor: "pointer",
        }}
      />
      {/* {!loaded && (
        <Skeleton
          style={{ position: "absolute" }}
          variant="rectangular"
          width={250}
          height={250}
        />
      )} */}
    </>
  )
}
