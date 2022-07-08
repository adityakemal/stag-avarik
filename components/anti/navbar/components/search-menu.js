import React from "react"

const SearchMenu = ({ variant, handleSearch }) => {
  return (
    <>
      <div className={`search-menu ${variant}`}>
        <div className="container">
          <div className="form-group">
            <div className="form-control-wrapper form-search">
              <input
                type="text"
                placeholder="Search"
                className="form-control"
              />
              <div className="form-search-icon">
                <i className="air ai-search" />
              </div>
              <div className="form-search-close" onClick={handleSearch}>
                <i className="air ai-times" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchMenu
