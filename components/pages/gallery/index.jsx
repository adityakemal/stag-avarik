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
import bgGallery from "assets/img/gallery/bg-gallery.jpeg"
// import filterTitle from "assets/img/gallery/filter-title.svg"
import filterTitle from "assets/img/gallery/filterTitle.png"
import { useInView } from "react-intersection-observer"
import { useDispatch, useSelector } from "react-redux"
import { filterEngine, getInitialData, handleFilterData, handleResetData, handleSortName } from "redux/gallery/gallery.reducer"
import AvarikTitle from "components/avarik-saga/avarik-title"
import { useScrollAnim } from "components/hooks/hooks"
import MobileDrawer from "./MobileDrawer"
// import SortMenu from "./SortMenu"

const avarikMetadata = shuffleArray(avarikMetadatax)

export default function App() {
  const dispatch = useDispatch()

  const { galleryList, filterList } = useSelector(state => state.gallery)


  const [allArr, setAllArr] = React.useState([])
  // const [_options, addFilter] = React.useState([])
  const [_options] = React.useState([])
  const [range, setRange] = React.useState(24)
  const [isPending, startTransition] = React.useTransition()

  React.useEffect(() => {
    startTransition(() => {
      setAllArr(galleryList)
    })
  }, [galleryList, filterList])


  React.useEffect(() => {
    dispatch(filterEngine())
  }, [filterList])


  const handleLoadMore = (v) => setRange(range + 12)


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

  const [trigger, anim] = useScrollAnim()


  const compWrapImages = () => (
    <div className="w-100 content-images ">
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={handleLoadMore}
        hasMore={true || false}
        // loader={<div className="" key={0}>Loading ...</div>}
        useWindow={false}
      >
        <div className="box-images">
          {allArr.slice(0, range).map((item, i) => (
            <div
              className="wrapfigure transition "
              onClick={() => {
                setCurrentItem(item)
                handleOpen(true)
              }}
              key={item?.id}
            >
              <div className="p-1 mb-2 cursor-pointer" style={{ border: '1px solid #A59480' }}>
                <Image
                  src={item.image}
                  alt={item.id}
                  width="100%" height="100%" layout="responsive" objectFit="contain"
                  placeholder="blur"
                  blurDataURL="./icons/apple-icon.png"
                // blurDataURL="https://abstackwp.khingars.com/wp-content/uploads/2021/09/image-blur-placeholder.png"
                />
              </div>
              <h6 className={`title text-white text-break `}>
                {item?.name}
              </h6>
            </div>
          ))}

          {/* //dummy  */}
          {
            [1, 2, 3, 4].map((v, i) =>
              <div className="wrapfigure transition " key={i} style={{ opacity: 0 }}>
                <div className="p-1 mb-2 cursor-pointer" style={{ border: '1px solid #A59480' }}>
                  {/* <Image
                src={'https://abstackwp.khingars.com/wp-content/uploads/2021/09/image-blur-placeholder.png'}
                width="100%" height="100%" layout="responsive" objectFit="contain"
                placeholder="blur"
                blurDataURL="./icons/apple-icon.png"
              // blurDataURL="https://abstackwp.khingars.com/wp-content/uploads/2021/09/image-blur-placeholder.png"
              /> */}
                </div>
                <h6 className={`title text-white text-break `}>
                  {" "}
                </h6>
              </div>
            )

          }

        </div>
      </InfiniteScroll>
    </div>

  )


  //1200 width
  return (

    <div className={`sc-gallery pb-5 mb-5 ${anim(1)} pt-5 pt-xs-2`}
      ref={trigger}
      style={{
        backgroundImage: `url(${bgGallery})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <ModalPic {...{ open, handleClose, currentItem }} />

      <AvarikTitle title="Gallery" titleClassName="text-white" className="mx-auto mb-5 mt-5" />
      {/* <pre>
        {JSON.stringify(filterList, null, 2)}
      </pre> */}


      <div className="container mt-md-5 mt-3">

        <div className="w-100 d-flex d-lg-none mb-3">
          <MobileDrawer>
            <Drawer
              {...{
                selectedFilterArray: _options,
                addFilter,
                filteredArray: [],
              }}
            />
          </MobileDrawer>
        </div>

        <div className="row row-4">
          {/* LEFT CONTENT  */}
          <div className="col-md-4  d-none d-lg-block">
            <div className="d-flex justify-content-end align-items-center w-100" style={{ height: 20 }}>
              {/* <h6 className="text-white m-0 cursor-pointer" onClick={() => dispatch(handleResetData())}>
                Reset
              </h6> */}
            </div>

            <div className="w-100 d-flex justify-content-end mt-3 pr-4">
              <div className="w-100 d-flex align-items-center justify-content-between" style={{ height: 60, maxWidth: 320, position: 'relative' }}>
                {/* <div>
                <img src={filterTitle} style={{ maxWidth: 230, width: '100%' }} />
                </div> */}
                <img src={filterTitle} className='w-100 h-100' />
                <p className="text-white m-0 cursor-pointer"
                  style={{
                    position: 'absolute',
                    right: '12%',
                    fontSize: '1.24rem',
                    opacity: 0,
                  }}
                  onClick={() => dispatch(handleResetData())}>
                  Reset
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-end w-100">
              <Drawer
                {...{
                  selectedFilterArray: _options,
                  addFilter,
                  filteredArray: [],
                }}
              />
            </div>


          </div>

          {/* RIGHT CONTENT  */}
          <div className="col-lg-8">
            {/* HEADER  */}
            <div className="wrap-search pb-4">
              <div className="d-flex justify-content-between align-items-center w-100 " style={{ height: 20 }}>
                <h5 className="text-white  border-0 bg-transparent m-0" style={{ marginTop: 14 }} >
                  {galleryList?.length} ITEMS
                </h5>
                {/* <SortMenu /> */}
                <h6 className="text-white  border-0 bg-transparent m-0 cursor-pointer" onClick={() => handleSortByName()} style={{ marginRight: 2 }}>
                  Sort By Name
                </h6>
              </div>
              <div className="mt-3">
                <SearchBar />
              </div>
            </div>
            {/* HEADER END */}
            {
              isPending ?
                <div style={{ width: '100%', height: '85vh' }} className='row'>
                  {[1, 1, 1, 1].map((res, i) => (
                    <div className="col-6 col-md-3" key={i}>
                      <Skeleton variant="rectangular" className="w-100" style={{ height: 200 }} />
                    </div>
                  ))}
                </div>
                :
                compWrapImages()
            }
          </div>
        </div>
      </div>
    </div>
  )
}

// https://opensea.mypinata.cloud/ipfs/Qme52CPg96v3JQCyD7tMoRcEdaAY9LrTi2YyBVowocgX8T/avarik-saga_0838.jpg
// https://ipfs.io/ipfs/Qme52CPg96v3JQCyD7tMoRcEdaAY9LrTi2YyBVowocgX8T/avarik-saga_0832.jpg
